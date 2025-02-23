from flask import Flask, request, jsonify
from embed import rag_app
from uuid import uuid4
from datetime import datetime

app = Flask(__name__)

# TODO: Replace with MongoDB collection
conversations = {
    # Structure:
    # "session_id": {
    #     "messages": [{"role": "user/assistant", "content": "...", "timestamp": "..."}],
    #     "last_accessed": datetime
    # }
}

@app.route("/query", methods=["POST"])
def query_document():
    try:
        data = request.get_json()
        user_query = data.get("query", "")
        session_id = data.get("session_id")

        if not user_query:
            return jsonify({"error": "No query provided"}), 400

        # Create new session if none exists
        if not session_id or session_id not in conversations:
            session_id = str(uuid4())
            conversations[session_id] = {
                "messages": [],
                "last_accessed": datetime.now()
            }

        # Update conversation history
        conversations[session_id]["messages"].append({
            "role": "user",
            "content": user_query,
            "timestamp": datetime.now().isoformat()
        })
        
        # Prepend context and conversation history to the query
        context = """Instructions: The provided context refers to a scientific paper about soil sensing methods. 
        The user is a nontechnical person, so please explain any technical terms thoroughly. 
        Focus on providing specific methodological details in an accessible way.
        
        Previous conversation:
        """
        
        # Add relevant conversation history
        history = "\n".join([
            f"{'User' if msg['role'] == 'user' else 'Assistant'}: {msg['content']}"
            for msg in conversations[session_id]["messages"][-3:]  # Last 3 messages
        ])
        
        full_query = f"{context}\n{history}\n\nQuestion: {user_query}"

        # Get response from RAG
        response = rag_app.query(full_query)

        # Store assistant's response
        conversations[session_id]["messages"].append({
            "role": "assistant",
            "content": response,
            "timestamp": datetime.now().isoformat()
        })
        conversations[session_id]["last_accessed"] = datetime.now()

        return jsonify({
            "response": response,
            "session_id": session_id
        })
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# TODO: Add periodic cleanup of old sessions
# TODO: Add MongoDB integration
# TODO: Add session expiry mechanism
# TODO: Add rate limiting
# TODO: Add authentication

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
