import React from 'react';
import {Link} from 'react-router-dom';



function Loggedin() {
  return (
    <div>
      <h1>Welcome to the administrator interface!</h1>
      <h3>欢迎来到管理员界面！</h3>
      <div>
        [公开内容] Public Content:
        <ul>
          <li><Link to="/Adminpanel">管理员权限 / Administrator Rights</Link></li>
          <li><Link to="/Healthknowledge">健康知识 / Health Knowledge</Link></li>
          <li><Link to="/Healthactivities">健康活动 / Health Activities</Link></li>
          <li><Link to="/Personalprofile">个人资料 / Personal Profile</Link></li>
          <li><Link to="/Healthassessment">健康评估 / Health Assessment</Link></li>
          <li><Link to="/Dietplan">饮食计划 / Diet Plan</Link></li>
          <li><Link to="/Community">社区论坛 / Community Forum</Link></li>
          <li><Link to="/Calendar">活动日历 / Event Calendar</Link></li>
          <li><Link to="/News">新闻和资讯 / News and Information</Link></li>
          <li><Link to="/Support">支持与帮助 / Support and Help</Link></li>
          <li><Link to="/">登出 / Logout</Link></li>
        </ul>
      </div>
    </div>
  );
}


export default Loggedin;