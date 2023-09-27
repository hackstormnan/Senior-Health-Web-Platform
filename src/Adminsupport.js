import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import './Adminsupport.css'; // 引入样式文件
import env from './config';


function Adminsupport() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbacksPerPage] = useState(5); // 每页显示的反馈数量

  useEffect(() => {
    fetchAllFeedbacks("");
  }, []);

  const fetchAllFeedbacks = async (content) => {
    try {
      const response = await axios.post(env.apiUrl + '/Adminsupport', { content });
      setFeedbacks(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  // 获取当前页面显示的反馈
  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstFeedback, indexOfLastFeedback);

  // 分页切换函数
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="adminsupport-container">
      <div className="adminsupport-header">
        <h2 className="adminsupport-title">All Feedbacks / 全部反馈</h2>
      </div>
      <div className="adminsupport-list">
        <ul>
          {currentFeedbacks.map((feedback, index) => (
            <li key={index} className="adminsupport-item">
              <h3 className="adminsupport-username">Username / 用户名: {feedback.username}</h3>
              <p className="adminsupport-content">Content / 内容: {feedback.content}</p>
              <p className="adminsupport-time">Time / 时间: {feedback.time}</p>
              <button className="adminsupport-delete-button" onClick={() => fetchAllFeedbacks(feedback.content)}>Delete / 删除</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="adminsupport-pagination">
        <Pagination
          itemsPerPage={feedbacksPerPage}
          totalItems={feedbacks.length}
          totalPages={Math.ceil(feedbacks.length / feedbacksPerPage)}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Adminsupport;
