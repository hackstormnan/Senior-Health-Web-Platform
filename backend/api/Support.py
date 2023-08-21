from flask import Flask, request, jsonify, Blueprint
import sqlite3


support_app = Blueprint('support_app', __name__)
@support_app.route('/Support', methods=['POST'])


def Support():
    data = request.get_json()

    username = data.get('username', '')
    feedback = data.get('feedback', '')


    conn = sqlite3.connect('myapp.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS feedbacks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            content TEXT,
            time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    cursor.execute('INSERT INTO feedbacks (username, content) VALUES (?, ?)', (username, feedback))

    conn.commit()
    conn.close()

    return jsonify('success')

if __name__ == '__main__':
    support_app.run()
