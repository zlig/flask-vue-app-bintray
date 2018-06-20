#!/usr/bin/env python
from flask import Flask, render_template

app = Flask(__name__)
app.debug=True

@app.route("/")
def index():
    return render_template('index.html', name=name)

@app.route("/hi/<name>")
@app.route("/hello/<name>")
def hi(name=None):
    return {"message": "hello"}

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == "__main__":
    app.run(host='0.0.0.0')

