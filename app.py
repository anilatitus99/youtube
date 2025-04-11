from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, YouTube!'

if __name__ == '__main__':
    # Run the application on the default port 8080 (which is used in Kubernetes containers)
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
