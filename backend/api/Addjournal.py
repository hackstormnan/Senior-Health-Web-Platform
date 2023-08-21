from flask import Flask, request, jsonify, Blueprint
import sqlite3


from flask_cors import CORS




addjournal_app = Blueprint('addjournal_app', __name__)
@addjournal_app.route('/Addjournal', methods=['POST'])


def Addjournal():
    data = request.get_json()
    title = data.get('title')
    content = data.get('content')
    summary = data.get('summary')

    if not title or not content or not summary:
        return jsonify('failure')

    conn = sqlite3.connect('myapp.db')
    cursor = conn.cursor()

    cursor.execute('''CREATE TABLE IF NOT EXISTS journals (
                    id INTEGER PRIMARY KEY,
                    title TEXT NOT NULL,
                    content TEXT NOT NULL,
                    summary TEXT
                    )''')
    
    cursor.execute('INSERT INTO journals (title, content, summary) VALUES (?, ?, ?)',
                   (title, content, summary))
    conn.commit()
    conn.close()

    return jsonify('success')


if __name__ == '__main__':
    addjournal_app.run()
