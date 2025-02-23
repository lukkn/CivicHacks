from flask import Flask, request, jsonify
from embedchain import App

app = Flask(__name__)
rag_app = App()

@app.route("/query", methods=["POST"])
def query_document():
    try:
        data = request.get_json()
        user_query = data.get("query", "")

        if not user_query:
            return jsonify({"error": "No query provided"}), 400

        # Run the query through embedchain
        response = rag_app.query(user_query)

        return jsonify({"response": response})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
