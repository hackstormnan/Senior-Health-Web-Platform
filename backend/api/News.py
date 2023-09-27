from flask import Flask, request, jsonify, Blueprint
import sqlite3

news_app = Blueprint('news_app', __name__)
@news_app.route('/News', methods=['GET'])

def News():
    conn = sqlite3.connect('myapp.db')
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM news')
    results = cursor.fetchall()

    news_list = []
    for row in results:
        news = {
            'id': row[0],
            'title': row[1],
            'content': row[2],
            'summary': row[3]
        }
        news_list.append(news)

    return jsonify({'results': news_list})

if __name__ == '__main__':
    news_app.run()
