from flask import Flask, request, jsonify, Blueprint
import sqlite3





healthactivities_app = Blueprint('healthactivities_app', __name__)
@healthactivities_app.route('/Healthactivities', methods=['GET'])


def Healthactivities():

    conn = sqlite3.connect('myapp.db')
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM activities')
    results = cursor.fetchall()

    journal_list = []
    for row in results:
        journal = {
            'id': row[0],
            'title': row[1],
            'content': row[2],
            'summary': row[3]
        }
        journal_list.append(journal)

    return jsonify({'results': journal_list})

if __name__ == '__main__':
    healthactivities_app.run()
