import React from 'react';
import { Link } from 'react-router-dom';
import './Loggedin.css';

function Loggedin() {
  return (
    <div className="loggedin-container">
      <div className="logout-link">
        <Link className="link" to="/">
          Logout / 登出
        </Link>
      </div>
      <h1 className="loggedin-title">Welcome to Elderly Health Care Portal! / 欢迎来到老年人健康护理门户网站！</h1>
      <h3 className="loggedin-subtitle">
        Welcome to the Senior Health Care Portal! Here you will find a wealth of health resources to help you improve your health and well-being.
         Explore the world of health through Health Facts and Health Activities, and manage your personal information and preferences in Profile.
          Participate in Health Assessment to gain health insights and track Diet Plan to maintain balanced nutrition. 
          Share your experiences and questions with others in the Community Forum, and stay up-to-date with events in the Events Calendar. 
          Keep up to date with medical news through News and Information. If you need help, go to Support & Help for resources. 
          And, of course, you can safely log out anytime at Log Out. We want to be with you on your health journey! / 
          欢迎来到老年人健康护理门户网站！这里汇集了丰富的健康资源，助您提升健康福祉。通过“健康知识”和“健康活动”，探索健康世界的门径；在“个人资料”中管理个人信息和偏好。
          参与“健康评估”获取健康洞察，追踪“饮食计划”以保持均衡营养。在“社区论坛”与他人交流经验和问题，通过“活动日历”掌握最新活动。通过“新闻和资讯”了解医疗动态。
          如需帮助，前往“支持与帮助”获取资源。当然，随时可以在“登出”处安全退出。我们愿与您共同追寻健康之旅！
          </h3>
      <div className="public-content">
        <ul className="link-list">
        <li className="link-list-item">
      <Link className="link" to="/Healthknowledge">
        Health Knowledge / 健康知识
      </Link>
    </li>
    <li className="link-list-item">
      <Link className="link" to="/Healthactivities">
        Health Activities / 健康活动
      </Link>
    </li>
    <li className="link-list-item">
      <Link className="link" to="/Personalprofile">
        Personal Profile / 个人资料
      </Link>
    </li>
    <li className="link-list-item">
      <Link className="link" to="/Healthassessment">
        Health Assessment / 健康评估
      </Link>
    </li>
    <li className="link-list-item">
      <Link className="link" to="/Dietplan">
        Diet Plan / 饮食计划
      </Link>
    </li>
    <li className="link-list-item">
      <Link className="link" to="/Community">
        Community Forum / 社区论坛
      </Link>
    </li>
    <li className="link-list-item">
      <Link className="link" to="/Calendar">
        Event Calendar / 活动日历
      </Link>
    </li>
    <li className="link-list-item">
      <Link className="link" to="/News">
        News and Information / 新闻和资讯
      </Link>
    </li>
    <li className="link-list-item">
      <Link className="link" to="/Support">
        Support and Help / 支持与帮助
      </Link>
    </li>

        </ul>
      </div>
    </div>
  );
}

export default Loggedin;
