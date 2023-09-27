from flask import Flask, request, jsonify, Blueprint
import sqlite3

community_app = Blueprint('community_app', __name__)
@community_app.route('/Community', methods=['POST'])


def Community():
    data = request.get_json()
    conn = sqlite3.connect('myapp.db')
    cursor = conn.cursor()

    newPostTitle = data.get('newPostTitle', '')
    newPostContent = data.get('newPostContent', '')

    poster = data.get('username', '')
    commenter = poster
    selectedPostId = data.get('selectedPostId', '')
    commentText = data.get('commentText', '')

    try:
        conn.execute('BEGIN')  # Start a transaction

        if newPostTitle and newPostContent:
            cursor.execute('''CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY,
                poster TEXT NOT NULL,
                title TEXT NOT NULL,
                content TEXT NOT NULL,
                time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )''')
            
            cursor.execute('INSERT INTO posts (poster, title, content) VALUES (?, ?, ?)',
                (poster, newPostTitle, newPostContent))
            conn.commit()


        if commentText:
            cursor.execute('''CREATE TABLE IF NOT EXISTS comments (
                id INTEGER PRIMARY KEY,
                commenter TEXT NOT NULL,
                commentedpostId INTEGER NOT NULL,
                postcomment TEXT NOT NULL,
                time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )''')

            cursor.execute('INSERT INTO comments (commenter, commentedpostId, postcomment) VALUES (?, ?, ?)',
                (commenter, selectedPostId, commentText))
            conn.commit()
            

        cursor.execute('''
            SELECT posts.id, posts.poster, posts.title, posts.content, posts.time,
                comments.id, comments.commenter, comments.postcomment, comments.time
            FROM posts
            LEFT JOIN comments ON posts.id = comments.commentedpostId
            ORDER BY posts.time DESC, comments.time DESC
        ''')

        results = cursor.fetchall()

        posts_dict = {}  # 使用字典来存储每篇 post 及其对应的评论

        for row in results:
            post_id = row[0]
            if post_id not in posts_dict:
                post = {
                    'id': post_id,
                    'poster': row[1],
                    'title': row[2],
                    'content': row[3],
                    'time': row[4],
                    'comments': []
                }
                posts_dict[post_id] = post
            
            if row[5] is not None:  # 检查是否有评论
                comment = {
                    'id': row[5],
                    'commenter': row[6],
                    'commentText': row[7],
                    'commentTime': row[8]
                }
                posts_dict[post_id]['comments'].append(comment)

        posts_list = list(posts_dict.values())  # 转换字典为列表

        return jsonify({'results': posts_list})


    except Exception as e:
        conn.rollback()  # Rollback the transaction in case of an error
        return jsonify({'error': str(e)})

    finally:
        conn.close()

if __name__ == '__main__':
    app = Flask(__name__)
    app.register_blueprint(community_app)
    app.run()
