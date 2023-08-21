import React from 'react';
import {Link} from 'react-router-dom';



function Adminpanel() {
  return (
    <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <h2>管理面板</h2>
        <p>欢迎访问管理面板。在此管理您的内容。</p>
      </div>
      <div>
        <h2>Admin Panel</h2>
        <p>Welcome to the Admin Panel. Manage your content here.</p>
      </div>
    </div>
    <ul>
      <li><Link to="/Addjournal">添加文章 / Add Journal</Link></li>
      <li><Link to="/Addactivities">添加活动 / Add Activities</Link></li>
      <li><Link to="/Adminsupport">管理员支持 / Admin Support</Link></li>
    </ul>
    </div>
  );
}


export default Adminpanel;