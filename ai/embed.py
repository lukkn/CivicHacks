import os
from embedchain import App
from dotenv import load_dotenv
load_dotenv()

# Set Google API key directly in environment
os.environ["GOOGLE_API_KEY"] = os.getenv("GOOGLE_API_KEY")

# Initialize Embedchain using config file with correct path
rag_app = App.from_config("ai/config.yaml")  # Use relative path from current directory
rag_app.add("ai/data/Soil Sensing Methods.pdf")
