import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate  } from 'react-router-dom';
import { useUserContext } from './Usercontext';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false); // 新增状态来控制是否显示注册页面

  const { saveUsername } = useUserContext();

  const handleLogin = () => {
    // 发送 POST 请求到 Flask 后端
    axios.post('http://127.0.0.1:5000/Login', { username, password })
      .then(response => {
        if (response.data === 'failure') {
          alert('Login failed. Please try again.');
        } else {
          setIsLoggedIn(true);
          console.log(username)
          saveUsername(username)
        }
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred. Please try again later.');
      });
  };

  const handleShowRegister = () => {
    setShowRegister(true);
  };

  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate('/Loggedin')
  } else if (showRegister) { // 如果显示注册页面
    navigate('/Register');
  } else {
    return (
      <div>
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleShowRegister}>Register</button> {/* 添加注册按钮 */}
      </div>
    );
  }
}

export default Login;