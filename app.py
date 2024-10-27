from flask import Flask, render_template

app = Flask(__name__, static_folder='static')


@app.route('/')
def hello_world():  # put application's code here
    return render_template('stone.html')

