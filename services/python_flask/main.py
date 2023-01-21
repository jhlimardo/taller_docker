from flask import Flask
app = Flask(__name__)

@app.route("/v1/python_flask", methods=['GET'])
def hello():
    return "Hola Mundo con Flask y Docker!!"

if __name__ == "__main__":
    app.run()
