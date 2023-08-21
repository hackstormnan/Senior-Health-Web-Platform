import React, { useState } from 'react';
import axios from 'axios';
import { useUserContext } from './Usercontext';


function Support() {
  const [feedback, setFeedback] = useState('');
  const { username } = useUserContext();

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 在这里添加将反馈信息发送给后端的逻辑
    setFeedback('');
    fetchData();
  };


  const fetchData = async () => {
    try {
      console.log(feedback + username)
      const response = await axios.post('http://127.0.0.1:5000/Support', { username, feedback});
      console.log('Data sent successfully');


    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <div className="Support">
      <header className="Support-header">
        <h1>用户反馈</h1>
        <form onSubmit={handleSubmit}>
          <label>
            请提供您的反馈意见：
            <textarea
              rows="4"
              cols="50"
              value={feedback}
              onChange={handleFeedbackChange}
            />
          </label>
          <br />
          <button type="submit">提交</button>
        </form>
      </header>
    </div>
  );
}

export default Support;
