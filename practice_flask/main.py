from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route('/') #tells the rouie where URL should go
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')
if __name__ == "__main__":
    app.run(debug=True)