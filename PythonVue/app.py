from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    data = {
        "title": "Flask SSR + Vue + Tailwind + TS",
        "items": ["Apple", "Banana", "Cherry"]
    }
    return render_template('index.html', **data)

if __name__ == '__main__':
    app.run(debug=True)
