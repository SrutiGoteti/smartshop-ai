from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "SmartShop AI backend is running!"}