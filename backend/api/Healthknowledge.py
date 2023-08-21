from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)



# ... 初始化数据库等代码 ...

# 根据标题模糊查询文章列表
@app.route('/api/articles/search', methods=['GET'])
def search_articles():
    conn = sqlite3.connect('myapp.db')
    cursor = conn.cursor()
    search_term = request.args.get('title')
    articles = cursor.execute('SELECT id, title FROM articles WHERE title LIKE ?', ('%' + search_term + '%',)).fetchall()
    conn.close()
    return jsonify(articles)

# ... 其他接口代码 ...

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)