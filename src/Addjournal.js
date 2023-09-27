import React, { useState } from 'react';
import axios from 'axios';
import './Addjournal.css'; // 导入 Addjournal 的样式文件
import env from './config';

function Addjournal() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');

  const handleAddjournal = () => {
    // 在这里处理提交逻辑，例如发送到后端保存
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Summary:', summary);

    // 清空表单
    setTitle('');
    setContent('');
    setSummary('');

    // 发送 POST 请求到 Flask 后端
    axios.post(env.apiUrl + '/Addjournal', { title, content, summary })
      .then(response => {
        if (response.data === 'success') {
          console.log('添加成功');
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
    <div className="addjournal-container">
      <h2 className="addjournal-title">添加文章 / Add Journal</h2>
      <div className="addjournal-form">
        <label htmlFor="title">标题 / Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="addjournal-input"
        />
        <label htmlFor="summary">简介 / Summary:</label>
        <input
          type="text"
          id="summary"
          value={summary}
          onChange={e => setSummary(e.target.value)}
          className="addjournal-input"
        />
        <label htmlFor="content">内容 / Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
          className="addjournal-textarea"
        />
        <button onClick={handleAddjournal} className="addjournal-button">Add Journal</button>
      </div>
    </div>
  );
}

export default Addjournal;
