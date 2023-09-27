import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from './Usercontext';
import './Login.css'; // Import your custom styles for Login here
import env from './config';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const { saveUsername } = useUserContext();

  const handleLogin = () => {
    axios.post(env.apiUrl + '/Login', { username, password })
      .then(response => {
        if (response.data === 'failure') {
          alert('Login failed. Please try again.');
        } else {
          setIsLoggedIn(true);
          saveUsername(username);
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
    navigate('/Loggedin');
  } else if (showRegister) {
    navigate('/Register');
  } else {
    return (
      <div className="login-container"> {/* Add a surrounding container */}
        <div className="login-box"> {/* Add a login box */}
          <h2 className="login-heading">Login / 登录</h2>
          <input className="login-input" type="text" placeholder="Username / 用户名" value={username} onChange={e => setUsername(e.target.value)} />
          <input className="login-input" type="password" placeholder="Password / 密码" value={password} onChange={e => setPassword(e.target.value)} />
          <button className="login-button" onClick={handleLogin}>Login / 登录</button>
          <button className="register-button" onClick={handleShowRegister}>Register / 注册</button>
        </div>
      </div>
    );
  }
}

export default Login;
