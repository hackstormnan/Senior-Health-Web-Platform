import React, { useState } from 'react';
import axios from 'axios';


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
    axios.post('http://127.0.0.1:5000/Addactivities', { title, content, summary })
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
    <div>
      <h2>添加活动 Add Activities</h2>
      <div>
        <label htmlFor="title">标题 Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">内容 Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="summary">简介 Summary:</label>
        <input
          type="text"
          id="summary"
          value={summary}
          onChange={e => setSummary(e.target.value)}
        />
      </div>
      <button onClick={handleAddactivities}>Add Activities</button>
    </div>
  );
}

export default Addactivities;
