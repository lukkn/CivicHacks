import requests

def test_query():
    url = "http://localhost:5000/query"
    payload = {
        "query": "What are the main soil sensing methods discussed in the document?"
    }
    
    response = requests.post(url, json=payload)
    print("Status:", response.status_code)
    print("Response:", response.json())

if __name__ == "__main__":
    test_query() 
