from flask import Flask, request, jsonify, Blueprint
import sqlite3
from flask_cors import CORS




adminsupport_app = Blueprint('adminsupport_app', __name__)
CORS(adminsupport_app)

# @adminsupport_app.route('/Deletefeedbacks', methods=['POST'])

# def Deletefeedbacks():
#     data = request.get_json()

#     content = data.get('content', '')

#     conn = sqlite3.connect('myapp.db')
#     cursor = conn.cursor()


#     cursor.execute('DELETE FROM feedbacks WHERE content = ?', (content))
#     conn.commit()
#     conn.close()




#     return jsonify({'success'})



@adminsupport_app.route('/Adminsupport', methods=['POST'])

def Adminsupport():
    data = request.get_json()
    conn = sqlite3.connect('myapp.db')
    cursor = conn.cursor()

    content = data.get('content', '')

    try:
        conn.execute('BEGIN')  # Start a transaction

        if content:
            cursor.execute('DELETE FROM feedbacks WHERE content = ?', (content,))
            conn.commit()  # Commit the deletion if content is provided

        cursor.execute('SELECT * FROM feedbacks')
        results = cursor.fetchall()

        feedback_list = []
        for row in results:
            feedback = {
                'id': row[0],
                'username': row[1],
                'content': row[2],
                'time': row[3]
            }
            feedback_list.append(feedback)

        return jsonify({'results': feedback_list})

    except Exception as e:
        conn.rollback()  # Rollback the transaction in case of an error
        return jsonify({'error': str(e)})

    finally:
        conn.close()





if __name__ == '__main__':
    adminsupport_app.run()
