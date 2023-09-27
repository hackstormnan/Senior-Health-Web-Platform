import React from 'react';
import { Link } from 'react-router-dom';
import './Adminpanel.css'; // 导入美化的 CSS 文件

function Adminpanel() {
  return (
    <div className="adminpanel-container">
      <div className="adminpanel-title">
        <h2>Admin Panel</h2>
        <p>Welcome to the Admin Panel. Manage your content here.</p>
      </div>
      <div className="adminpanel-title">
        <h2>管理面板</h2>
        <p>欢迎访问管理面板。在此管理您的内容。</p>
      </div>
      <ul className="adminpanel-list">
        <li className="adminpanel-list-item">
          <Link to="/Addjournal">Add Journal / 添加文章</Link>
        </li>
        <li className="adminpanel-list-item">
          <Link to="/Addactivities">Add Activities / 添加活动</Link>
        </li>
        <li className="adminpanel-list-item">
          <Link to="/Adminsupport">Admin Support / 管理员支持</Link>
        </li>
        <li className="adminpanel-list-item">
          <Link to="/AddNews">Add News / 添加新闻</Link>
        </li>
      </ul>
    </div>
  );
}

export default Adminpanel;
