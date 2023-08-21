

# @app.route('Register', methods=['POST'])
# def register():
#     data = request.get_json()
#     username = data.get('username')
#     password = data.get('password')

#     if not username or not password:
#         return jsonify('failure')

#     if len(password) < 8:
#         return jsonify('failure')

#     conn = sqlite3.connect('myapp.db')
#     cursor = conn.cursor()

#     existing_user = cursor.execute('SELECT * FROM users WHERE username = ?', (username,)).fetchone()
#     if existing_user:
#         conn.close()
#         return jsonify('failure')

#     cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, password))
#     conn.commit()

#     user_id = cursor.lastrowid  # 获取插入的用户ID
#     conn.close()

#     return jsonify('success')

# if __name__ == '__main__':
#     init_db()  # 初始化数据库表格
#     app.run()




from flask import Blueprint, request, jsonify
import sqlite3



register_app = Blueprint('register_app', __name__)
@register_app.route('/Register', methods=['POST'])


def Register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # 假设用户名和密码验证成功
    if not username or not password:
        return jsonify('failure')

    if len(password) < 8:
        return jsonify('failure')
    


    conn = sqlite3.connect('myapp.db')
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS users (
                      id INTEGER PRIMARY KEY,
                      username TEXT NOT NULL,
                      password TEXT NOT NULL,
                      name TEXT NOT NULL,
                      gender TEXT NOT NULL,
                      age TEXT NOT NULL,
                      height TEXT NOT NULL,
                      weight TEXT NOT NULL,
                      contact TEXT NOT NULL,
                      address TEXT NOT NULL,
                      email TEXT NOT NULL,
                      bloodtype TEXT NOT NULL,
                      allergies TEXT NOT NULL,
                      medicalhistory TEXT NOT NULL,
                      averagesleepduration TEXT NOT NULL,
                      dietarypreferences TEXT NOT NULL,                   
                      exercisehabits TEXT NOT NULL,
                      bmi TEXT NOT NULL,
                      emergencycontact TEXT NOT NULL,
                      healthgoals TEXT NOT NULL
                      )''')
    
    existing_user = cursor.execute('SELECT * FROM users WHERE username = ?', (username,)).fetchone()
    if existing_user:
        conn.close()
        return jsonify('failure')

    # cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, password))
    cursor.execute('''INSERT INTO users (
        username, password, name, gender, age, height, weight, 
        contact, address, email, bloodtype, allergies, 
        medicalhistory, averagesleepduration, dietarypreferences, 
        exercisehabits, bmi, emergencycontact, healthgoals
    ) VALUES (?, ?, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')''',
    (username, password))

    conn.commit()
    conn.close()
    

    
    return jsonify('success')

if __name__ == '__main__':
    register_app.run()
