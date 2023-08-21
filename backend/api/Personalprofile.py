from flask import Flask, request, jsonify, Blueprint
import sqlite3


personalprofile_app = Blueprint('personalprofile_app', __name__)
@personalprofile_app.route('/Personalprofile', methods=['GET', 'POST'])


def Personalprofile():
    data = request.get_json()

    username = data.get('username', '')
    name = data.get('name', '')
    gender = data.get('gender', '')
    age = data.get('age', '')
    height = data.get('height', '')
    weight = data.get('weight', '')
    contact = data.get('contact', '')
    address = data.get('address', '')
    email = data.get('email', '')
    bloodtype = data.get('bloodtype', '')
    allergies = data.get('allergies', '')
    medicalhistory = data.get('medicalhistory', '')
    averagesleepduration = data.get('averagesleepduration', '')
    dietarypreferences = data.get('dietarypreferences', '')
    exercisehabits = data.get('exercisehabits', '')
    bmi = data.get('bmi', '')
    emergencycontact = data.get('emergencycontact', '')
    healthgoals = data.get('healthgoals', '')

    values = (
        name, gender, age, height, weight, contact, address,
        email, bloodtype, allergies, medicalhistory, averagesleepduration,
        dietarypreferences, exercisehabits, bmi, emergencycontact, healthgoals,
        username
    )


    conn = sqlite3.connect('myapp.db')
    cursor = conn.cursor()

    cursor.execute('''
        UPDATE users
        SET name = ?, gender = ?, age = ?, height = ?, weight = ?, contact = ?,
        address = ?, email = ?, bloodtype = ?, allergies = ?, medicalhistory = ?,
        averagesleepduration = ?, dietarypreferences = ?, exercisehabits = ?,
        bmi = ?, emergencycontact = ?, healthgoals = ?
        WHERE username = ?
    ''', values)



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
    personalprofile_app.run()
