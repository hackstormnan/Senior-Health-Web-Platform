import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from './Usercontext';
import axios from 'axios';
import './Register.css'; // Import your custom styles for Register here
import env from './config';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const { saveUsername } = useUserContext();

  const handleRegister = () => {
    axios.post(env.apiUrl + '/Register', { username, password })
      .then(response => {
        if (response.data === 'success') {
          saveUsername(username);
          navigate('/Loggedin');
          return;
        } else {
          setErrorMessage('Register failed. Please try again.');
        }
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('An error occurred. Please try again later.');
      });
  };

  return (
    <div className="register-container"> {/* Add a surrounding container */}
      <div className="register-box"> {/* Add a register box */}
        <h2 className="register-heading">Register / 注册</h2>
        <input className="register-input" type="text" placeholder="Username / 用户名" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="register-input" type="password" placeholder="Password / 密码" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="register-button" onClick={handleRegister}>Register / 注册</button>
        <p className="error-message">{errorMessage}</p>
        <p>
          Already have an account? / 已经有帐号了？<Link to="/Login">Login here / 此处登录</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
