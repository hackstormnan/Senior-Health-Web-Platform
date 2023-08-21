from flask import Flask, request, jsonify, Blueprint
import sqlite3


from flask_cors import CORS




addactivities_app = Blueprint('addactivities_app', __name__)
@addactivities_app.route('/Addactivities', methods=['POST'])


def Addactivities():
    data = request.get_json()
    title = data.get('title')
    content = data.get('content')
    summary = data.get('summary')

    if not title or not content or not summary:
        return jsonify('failure')

    conn = sqlite3.connect('myapp.db')
    cursor = conn.cursor()

    cursor.execute('''CREATE TABLE IF NOT EXISTS activities (
                    id INTEGER PRIMARY KEY,
                    title TEXT NOT NULL,
                    content TEXT NOT NULL,
                    summary TEXT
                    )''')
    
    cursor.execute('INSERT INTO activities (title, content, summary) VALUES (?, ?, ?)',
                   (title, content, summary))
    conn.commit()
    conn.close()

    return jsonify('success')


if __name__ == '__main__':
    addactivities_app.run()
