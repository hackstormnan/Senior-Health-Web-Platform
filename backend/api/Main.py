from flask import Flask
from flask_cors import CORS
from Login import login_app  # 导入 login.py 中的蓝图
from Register import register_app


from Addjournal import addjournal_app
from Searchjournal import searchjournal_app
from Alljournal import alljournal_app

from Healthactivities import healthactivities_app
from Addactivities import addactivities_app

from Personalprofile import personalprofile_app
from Initialprofile import initialprofile_app

from Community import community_app

from AddNews import addnews_app
from News import news_app

from Support import support_app
from Adminsupport import adminsupport_app

app = Flask(__name__)

# 注册登录蓝图到主应用
app.register_blueprint(login_app)
app.register_blueprint(register_app)


app.register_blueprint(addjournal_app)
app.register_blueprint(searchjournal_app)
app.register_blueprint(alljournal_app)


app.register_blueprint(healthactivities_app)
app.register_blueprint(addactivities_app)

app.register_blueprint(personalprofile_app)
app.register_blueprint(initialprofile_app)



app.register_blueprint(community_app)

app.register_blueprint(addnews_app)
app.register_blueprint(news_app)

app.register_blueprint(support_app)
app.register_blueprint(adminsupport_app)




# CORS(app, origins='http://localhost:3001')
CORS(app)

@app.route('/')
def Main():
    return 'Hello, Flask!'

@app.route('/Register')
def Register():
    return 'Register'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug = True)
