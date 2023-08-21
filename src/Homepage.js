import React from 'react';
import {Link} from 'react-router-dom';


function HomePage() {
  return (
    <div>
      <h1>Welcome to Elderly Health Care Portal!</h1>
      <h3>欢迎来到老年人健康护理门户网站！</h3>
      <div>
        [公开内容] Public Content:
        <ul>
          <li><Link to="/Healthknowledge">健康知识 / Health Knowledge</Link></li>
          <li><Link to="/Healthactivities">健康活动 / Health Activities</Link></li>
          <li><Link to="/News">新闻和资讯 / News and Information</Link></li>
          <li><Link to="/Login">登录 / Login</Link></li>
        </ul>
      </div>
    </div>
  );
}






export default HomePage;