import requests
from typing import Optional

class ConversationTester:
    def __init__(self, base_url: str = "http://localhost:5000"):
        self.base_url = base_url
        self.session_id: Optional[str] = None
        self.conversation_history = []

    def send_message(self, query: str) -> dict:
        payload = {
            "query": query,
            "session_id": self.session_id
        }
        
        response = requests.post(f"{self.base_url}/query", json=payload)
        response_data = response.json()
        
        # Store session ID if this is first message
        if not self.session_id:
            self.session_id = response_data.get("session_id")
        
        # Store conversation history
        self.conversation_history.append({
            "role": "user",
            "content": query
        })
        self.conversation_history.append({
            "role": "assistant",
            "content": response_data.get("response")
        })
        
        return response_data

    def display_conversation(self):
        print("\n=== Conversation History ===")
        for message in self.conversation_history:
            role = "You" if message["role"] == "user" else "Assistant"
            print(f"\n{role}: {message['content']}")
        print("\n===========================")

    def interactive_session(self):
        print("\nStarting interactive conversation (type 'exit' to end, 'history' to see conversation)")
        print("=================================================================")
        
        while True:
            user_input = input("\nYou: ").strip()
            
            if user_input.lower() == 'exit':
                break
            elif user_input.lower() == 'history':
                self.display_conversation()
                continue
            elif not user_input:
                continue
                
            try:
                response = self.send_message(user_input)
                print(f"\nAssistant: {response.get('response')}")
            except Exception as e:
                print(f"\nError: {str(e)}")
                break

def run_automated_test():
    """Run a predefined sequence of questions"""
    tester = ConversationTester()
    
    test_questions = [
        "How can I use the soil sensing methods in my own backyard?",
        "What equipment would I need?",
        "Is this something I can do on my own or do I need professional help?",
    ]
    
    print("\nRunning automated test sequence...")
    for question in test_questions:
        print(f"\nUser: {question}")
        response = tester.send_message(question)
        print(f"Assistant: {response.get('response')}")
    
    print("\nTest sequence completed.")
    tester.display_conversation()

def main():
    print("\nSoil Sensing Methods Conversation Tester")
    print("1. Run interactive session")
    print("2. Run automated test sequence")
    choice = input("Select an option (1-2): ")
    
    if choice == "1":
        ConversationTester().interactive_session()
    elif choice == "2":
        run_automated_test()
    else:
        print("Invalid choice")

if __name__ == "__main__":
    main() 
