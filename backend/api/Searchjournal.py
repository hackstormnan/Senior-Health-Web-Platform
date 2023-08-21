from flask import Flask, request, jsonify, Blueprint
import sqlite3



searchjournal_app = Blueprint('searchjournal_app', __name__)
@searchjournal_app.route('/Searchjournal', methods=['GET', 'POST'])



def search_journal():
    data = request.get_json()
    title = data.get('title', '')
    summary = data.get('summary', '')

    conn = sqlite3.connect('myapp.db')
    conn.row_factory = sqlite3.Row  # 使查询结果可以通过列名获取值
    cursor = conn.cursor()


    # 使用 LIKE 进行模糊查询
    query = "SELECT * FROM journals WHERE title LIKE ? AND summary LIKE ?"
    result = cursor.execute(query, ('%' + title + '%', '%' + summary + '%')).fetchall()

    conn.close()

    # 将查询结果转换为字典列表
    journal_list = [dict(row) for row in result]
    print(journal_list)
    return jsonify({'results': journal_list})


if __name__ == '__main__':
    searchjournal_app.run()
