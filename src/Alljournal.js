import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';


function Alljournal() {
  const [allArticles, setAllArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5); // 每页显示的文章数量

  

  useEffect(() => {
    const fetchAllArticles = async () => {
      try {
        console.log('111')
        const response = await axios.get('http://127.0.0.1:5000/Alljournal');
        console.log('111')
        setAllArticles(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllArticles();
  }, []);

  // 获取当前页面显示的文章
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = allArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  console.log(currentArticles)

  // 分页切换函数
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

//   console.log(typeof(allArticles))

  return (
    <div>
      <h2>All Articles</h2>
      <ul>
        {currentArticles.map((article, index) => (
        <li key={index}>
            <h3>Title: {article.title}</h3>
            <p>Content: {article.content}</p>
            <p>Summary: {article.summary}</p>
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
