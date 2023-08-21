from flask import Flask, request, jsonify, Blueprint
import sqlite3


initialprofile_app = Blueprint('initialprofile_app', __name__)
@initialprofile_app.route('/Initialprofile', methods=['GET', 'POST'])


def Initialprofile():
    data = request.get_json()

    username = data.get('username', '')


    conn = sqlite3.connect('myapp.db')
    cursor = conn.cursor()


    cursor.execute('SELECT * FROM users WHERE username = ?', (username,))
    results = cursor.fetchall()

    info_list = []
    for row in results:
        info = {
            'id': row[0],
            'username': row[1],
            'name': row[3],
            'gender': row[4],
            'age': row[5],
            'height': row[6],
            'weight': row[7],

            'contact': row[8],
            'address': row[9],
            'email': row[10],
            'bloodtype': row[11],
            'allergies': row[12],

            'medicalhistory': row[13],
            'averagesleepduration': row[14],
            'dietarypreferences': row[15],
            'exercisehabits': row[16],

            'bmi': row[17],
            'emergencycontact': row[18],
            'healthgoals': row[19],
        }
        info_list.append(info)
    
    conn.commit()

    return jsonify({'results': info_list})

if __name__ == '__main__':
    initialprofile_app.run()
