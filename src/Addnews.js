import React, { useState } from 'react';
import axios from 'axios';
import './Addnews.css'; // 引入样式文件
import env from './config';

function AddNews() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');

  const handleAddNews = () => {
    // 处理提交逻辑，例如发送到后端保存
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Summary:', summary);

    // 清空表单
    setTitle('');
    setContent('');
    setSummary('');

    // 发送 POST 请求到 Flask 后端
    axios.post(env.apiUrl + '/AddNews', { title, content, summary })
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
    <div className="add-news-container">
      <h2 className="add-news-title">Add News / 添加新闻</h2>
      <div className="add-news-form">
        <label className="add-news-label" htmlFor="title">Title / 标题:</label>
        <input
          className="add-news-input"
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="add-news-form">
        <label className="add-news-label" htmlFor="summary">Summary / 简介:</label>
        <input
          className="add-news-input"
          type="text"
          id="summary"
          value={summary}
          onChange={e => setSummary(e.target.value)}
        />
      </div>
      <div className="add-news-form">
        <label className="add-news-label" htmlFor="content">Content / 内容:</label>
        <textarea
          className="add-news-textarea"
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>
      <button className="add-news-button" onClick={handleAddNews}>Add News / 添加新闻</button>
    </div>
  );
}

export default AddNews;
