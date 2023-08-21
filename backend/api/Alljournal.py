from flask import Flask, request, jsonify, Blueprint
import sqlite3



alljournal_app = Blueprint('alljournal_app', __name__)
@alljournal_app.route('/Alljournal', methods=['GET'])


def Alljournal():

    conn = sqlite3.connect('myapp.db')
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM journals')
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
    alljournal_app.run()
