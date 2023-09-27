import React, { useState } from 'react';
import axios from 'axios';
import './Searchjournal.css'; // 导入你的样式文件路径
import Pagination from './Pagination'; // 导入你的分页组件路径
import env from './config';

function Searchjournal() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 1; // 每页显示的文章数量

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(env.apiUrl + '/Searchjournal', { title, summary });
      console.log('Data sent to backend successfully');
      setResults(response.data.results);
      setCurrentPage(1); // 每次搜索后重置页码为第一页
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  // 获取当前页面显示的文章
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = results.slice(indexOfFirstArticle, indexOfLastArticle);

  // 分页切换函数
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="searchjournal-container">
      <h2>Search Articles / 搜索文章</h2>
      <form className="searchjournal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title / 标题"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="searchjournal-input"
        />
        <input
          type="text"
          placeholder="Summary / 简介"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="searchjournal-input"
        />
        <button type="submit" className="searchjournal-button">Search / 搜索</button>
      </form>
      <ul className="searchjournal-results">
        {currentArticles.map((result) => (
          <li key={result.id} className="searchjournal-result">
            <div className="searchjournal-title">
              <h3>Title / 标题: {result.title}</h3>
            </div>
            <div className="searchjournal-summary">
              <p>Summary / 简介： {result.summary}</p>
            </div>
            <div className="searchjournal-content">
              <p>Content 内容： {result.content}</p>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        itemsPerPage={articlesPerPage}
        totalItems={results.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Searchjournal;
