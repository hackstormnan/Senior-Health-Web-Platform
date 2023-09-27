import React, { useEffect, useState } from 'react';
import { useUserContext } from './Usercontext';
import axios from 'axios';
import './Personalprofile.css'; // 引入样式文件
import env from './config';


function PersonalProfile() {
  const { username } = useUserContext();

  const [userInfo, setUserInfo] = useState({
    username: '',
    name: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    contact: '',
    address: '',
    email: '',
    bloodtype: '',
    allergies: '',
    medicalhistory: '',
    averagesleepduration: '',
    dietarypreferences: '',
    exercisehabits: '',
    bmi: '',
    emergencycontact: '',
    healthgoals: ''
  });

  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    // 在这里发送更新请求到后端
    setEditable(false);
    fetchData();
  };

  const handleChange = (field, value) => {
    setUserInfo(prevState => ({
      ...prevState,
      [field]: value
    }));
    console.log(field + value);
  };

  const catchData = async () => {
    try {
      const response = await axios.post(env.apiUrl + '/Initialprofile', { username });
      console.log('数据发送成功');

      const userData = response.data.results[0];
      setUserInfo({
        ...userInfo,
        username: userData.username,
        name: userData.name,
        gender: userData.gender,
        age: userData.age,
        height: userData.height,
        weight: userData.weight,
        contact: userData.contact,
        address: userData.address,
        email: userData.email,
        bloodtype: userData.bloodtype,
        allergies: userData.allergies,
        medicalhistory: userData.medicalhistory,
        averagesleepduration: userData.averagesleepduration,
        dietarypreferences: userData.dietarypreferences,
        exercisehabits: userData.exercisehabits,
        bmi: userData.bmi,
        emergencycontact: userData.emergencycontact,
        healthgoals: userData.healthgoals,
      });

    } catch (error) {
      console.error('发送数据到后端时出错:', error);
    }
  };
  
  const fetchData = async () => {
    try {
      const response = await axios.post(env.apiUrl + '/Personalprofile', userInfo);
      console.log('数据成功发送到后端');
      const userData = response.data.results[0];
      setUserInfo({
        ...userInfo,
        username: userData.username,
        name: userData.name,
        gender: userData.gender,
        age: userData.age,
        height: userData.height,
        weight: userData.weight,
        contact: userData.contact,
        address: userData.address,
        email: userData.email,
        bloodtype: userData.bloodtype,
        allergies: userData.allergies,
        medicalhistory: userData.medicalhistory,
        averagesleepduration: userData.averagesleepduration,
        dietarypreferences: userData.dietarypreferences,
        exercisehabits: userData.exercisehabits,
        bmi: userData.bmi,
        emergencycontact: userData.emergencycontact,
        healthgoals: userData.healthgoals,
      });
    } catch (error) {
      console.error('发送数据到后端时出错:', error);
    }
  };

  useEffect(() => {
    if (username !== '') {
      catchData();
    }
  }, [username]);

  return (
    <div className="personal-profile-container">
      <h2 className="profile-title">Personal Profile / 个人界面</h2>
      <h2 className="username">Username / 用户名: {username}</h2>

      <form className="profile-form">
        <div className="profile-field">
          <label className="field-label">Name / 姓名:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.name}
            readOnly={!editable}
            onChange={e => handleChange('name', e.target.value)}
          />
        </div>
        
        <div className="profile-field">
          <label className="field-label">Gender / 性别:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.gender}
            readOnly={!editable}
            onChange={e => handleChange('gender', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Age / 年龄:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.age}
            readOnly={!editable}
            onChange={e => handleChange('age', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Height / 身高:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.height}
            readOnly={!editable}
            onChange={e => handleChange('height', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Weight / 体重:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.weight}
            readOnly={!editable}
            onChange={e => handleChange('weight', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Contact / 联系方式:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.contact}
            readOnly={!editable}
            onChange={e => handleChange('contact', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Address / 地址:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.address}
            readOnly={!editable}
            onChange={e => handleChange('address', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Email / 电子邮件:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.email}
            readOnly={!editable}
            onChange={e => handleChange('email', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Bloodtype / 血型:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.bloodtype}
            readOnly={!editable}
            onChange={e => handleChange('bloodtype', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Allergies / 过敏:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.allergies}
            readOnly={!editable}
            onChange={e => handleChange('allergies', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Medicalhistory / 病史:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.medicalhistory}
            readOnly={!editable}
            onChange={e => handleChange('medicalhistory', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Average Sleep Duration / 平均睡眠时长:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.averagesleepduration}
            readOnly={!editable}
            onChange={e => handleChange('averagesleepduration', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Dietary Preferences / 饮食喜好:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.dietarypreferences}
            readOnly={!editable}
            onChange={e => handleChange('dietarypreferences', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Exercise Habits / 运动习惯:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.exercisehabits}
            readOnly={!editable}
            onChange={e => handleChange('exercisehabits', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">BMI:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.bmi}
            readOnly={!editable}
            onChange={e => handleChange('bmi', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Emergency Contact / 紧急联系人:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.emergencycontact}
            readOnly={!editable}
            onChange={e => handleChange('emergencycontact', e.target.value)}
          />
        </div>

        <div className="profile-field">
          <label className="field-label">Health Goals / 健康目标:</label>
          <input
            type="text"
            className="field-input"
            value={userInfo.healthgoals}
            readOnly={!editable}
            onChange={e => handleChange('healthgoals', e.target.value)}
          />
        </div>
      </form>

      {editable ? (
        <div>
          <button className="action-button save-button" onClick={handleSave}>
            Save / 保存
          </button>
        </div>
      ) : (
        <button className="action-button edit-button" onClick={handleEdit}>
          Edit / 编辑
        </button>
      )}
    </div>
  );
}

export default PersonalProfile;
