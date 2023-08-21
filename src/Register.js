import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { useUserContext } from './Usercontext';
import axios from 'axios';


function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const { saveUsername } = useUserContext();

  const handleRegister = () => {
    // 发送 POST 请求到 Flask 后端
    axios.post('http://127.0.0.1:5000/Register', { username, password })
    .then(response => {
      if (response.data === 'success') {
        console.log('注册成功');
        saveUsername(username)
        navigate('/Loggedin');
        return;

      } else {
        alert('Register failed. Please try again.');
      }
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred. Please try again later.');
    });
  
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <p style={{ color: 'red' }}>{errorMessage}</p>
      <p>
        已经有账号？<Link to="/Login">去登录</Link>
      </p>
    </div>
  );
}

export default Register;
