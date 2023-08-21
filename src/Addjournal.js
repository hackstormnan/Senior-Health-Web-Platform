import React, { useState } from 'react';
import axios from 'axios';


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
    axios.post('http://127.0.0.1:5000/Addjournal', { title, content, summary })
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
      <h2>Add Journal</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="summary">Summary:</label>
        <input
          type="text"
          id="summary"
          value={summary}
          onChange={e => setSummary(e.target.value)}
        />
      </div>
      <button onClick={handleAddjournal}>Add Journal</button>
    </div>
  );
}

export default Addjournal;
