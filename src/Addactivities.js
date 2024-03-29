import React, { useState } from 'react';
import axios from 'axios';
import './Addactivities.css'; // 引入样式文件
import env from './config';

function Addactivities() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');

  const handleAddactivities = () => {
    // 在这里处理提交逻辑，例如发送到后端保存
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Summary:', summary);

    // 清空表单
    setTitle('');
    setContent('');
    setSummary('');

    // 发送 POST 请求到 Flask 后端
    axios.post(env.apiUrl + '/Addactivities', { title, content, summary })
      .then(response => {
        if (response.data === 'success') {
          console.log('添加成功');
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
    <div className="addactivities-container">
      <h2 className="addactivities-title">添加活动 Add Activities</h2>
      <div className="addactivities-form">
        <label htmlFor="title" className="addactivities-label">标题 Title:</label>
        <input
          type="text"
          id="title"
          className="addactivities-input"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="summary" className="addactivities-label">简介 Summary:</label>
        <input
          type="text"
          id="summary"
          className="addactivities-input"
          value={summary}
          onChange={e => setSummary(e.target.value)}
        />
        <label htmlFor="content" className="addactivities-label">内容 Content:</label>
        <input
          type="text"
          id="content"
          className="addactivities-input"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button className="addactivities-button" onClick={handleAddactivities}>
          Add Activities
        </button>
      </div>
    </div>
  );
}

export default Addactivities;
