import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import './Alljournal.css'; // 导入你的样式文件路径
import env from './config';

function Alljournal() {
  const [allArticles, setAllArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(1); // 每页显示的文章数量

  useEffect(() => {
    const fetchAllArticles = async () => {
      try {
        const response = await axios.get(env.apiUrl + '/Alljournal');
        setAllArticles(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllArticles();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = allArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="alljournal-container">
      <h2>All Articles / 全部文章</h2>
      <ul className="alljournal-results">
        {currentArticles.map((article, index) => (
          <li key={index} className="alljournal-result">
            <div className="alljournal-title">
              <h3>Title / 标题</h3>
              <h3>{article.title}</h3>
            </div>
            <div className="alljournal-summary">
              <p>{article.summary}</p>
            </div>
            <div className="alljournal-content">
              <p>{article.content}</p>
            </div>
          </li>
        ))}
      </ul>

      <Pagination
        itemsPerPage={articlesPerPage}
        totalItems={allArticles.length}
        totalPages={Math.ceil(allArticles.length / articlesPerPage)}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Alljournal;
