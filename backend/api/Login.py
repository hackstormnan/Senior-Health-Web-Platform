from flask import Flask, request, jsonify, Blueprint
import sqlite3


login_app = Blueprint('login_app', __name__)
@login_app.route('/Login', methods=['POST'])

def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    conn = sqlite3.connect('myapp.db')
    cursor = conn.cursor()

    user = cursor.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password)).fetchone()

    conn.close()


    if user:
        return jsonify('success')
    else:
        return jsonify('failure')

if __name__ == '__main__':
    login_app.run()