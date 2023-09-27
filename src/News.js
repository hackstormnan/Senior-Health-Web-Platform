import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import './News.css'; // 引入自定义的 CSS 样式文件
import env from './config';

function News() {
  const [newsList, setNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(5);

  useEffect(() => {
    const fetchNewsList = async () => {
      try {
        const response = await axios.get(env.apiUrl + '/News');
        setNewsList(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewsList();
  }, []);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsList.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="news-container"> {/* 添加外部容器样式 */}
      <h2 className="news-title">News / 新闻</h2> {/* 添加标题样式 */}
      <ul className="news-list"> {/* 添加新闻列表样式 */}
        {currentNews.map((newsItem, index) => (
          <li className="news-item" key={index}> {/* 添加新闻项样式 */}
            <h3 className="news-item-title">Title / 标题: {newsItem.title}</h3>
            <p className="news-item-content">Content / 内容: {newsItem.content}</p>
            <p className="news-item-summary">Summary / 简介: {newsItem.summary}</p>
          </li>
        ))}
      </ul>

      <Pagination
        itemsPerPage={newsPerPage}
        totalItems={newsList.length}
        totalPages={Math.ceil(newsList.length / newsPerPage)}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default News;
