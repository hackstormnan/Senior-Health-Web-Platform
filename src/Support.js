import React, { useState } from 'react';
import axios from 'axios';
import { useUserContext } from './Usercontext';
import './Support.css'; // 请确保正确引入样式文件
import env from './config';

function Support() {
  const [feedback, setFeedback] = useState('');
  const { username } = useUserContext();

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 在这里添加将反馈信息发送给后端的逻辑
    await sendDataToBackend();
    setFeedback('');
  };

  const sendDataToBackend = async () => {
    try {
      console.log(feedback + username);
      const response = await axios.post(env.apiUrl + '/Support', {
        username,
        feedback,
      });
      console.log('Data sent successfully');
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <div className="support-container">
      <header className="support-header">
        <h1 className="support-title">User Feedback / 用户反馈</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="feedback" className="support-label">
            Please provide your feedback / 请提供您的反馈意见 :
            <textarea
              id="feedback"
              rows="4"
              cols="50"
              value={feedback}
              onChange={handleFeedbackChange}
              className="support-textarea"
            />
          </label>
          <br />
          <button type="submit" className="support-button">
            Submit / 提交
          </button>
        </form>
      </header>
    </div>
  );
}

export default Support;
