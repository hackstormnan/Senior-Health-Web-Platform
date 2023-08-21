import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';





function Adminsupport() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbacksPerPage] = useState(5); // 每页显示的反馈数量

  useEffect(() => {
    
    fetchAllFeedbacks("");
  }, []);


  const fetchAllFeedbacks = async (content) => {
    try {
      console.log(content);
      console.log(typeof(content))
      const response = await axios.post('http://127.0.0.1:5000/Adminsupport', {content});
      setFeedbacks(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

    // // 删除指定的反馈
    // const deleteFeedback = async (content) => {
    // try {
    //     // console.log(content)
    //     // let s = '111'
    //     await axios.post('http://127.0.0.1:5000/Deletefeedbacks', { content});
    //     // 更新反馈列表
    //     // const updatedFeedbacks = feedbacks.filter((feedback) => feedback.id !== feedbackId);
    //     // setFeedbacks(updatedFeedbacks);
    //     // const userData = response.data.results;
    //     } catch (error) {
    //     console.error(error);
    // }
    // };

  // 获取当前页面显示的反馈
  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstFeedback, indexOfLastFeedback);

  // 分页切换函数
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  return (
    <div>
      <h2>全部反馈 All Feedbacks</h2>
      <ul>
        {currentFeedbacks.map((feedback, index) => (
          <li key={index}>
            <h3>用户名 Username: {feedback.username}</h3>
            <p>内容 Content: {feedback.content}</p>
            <p>时间 Time: {feedback.time}</p>
            <button onClick={() => fetchAllFeedbacks(feedback.content)}>删除</button>
          </li>
        ))}
      </ul>

      <Pagination
        itemsPerPage={feedbacksPerPage}
        totalItems={feedbacks.length}
        totalPages={Math.ceil(feedbacks.length / feedbacksPerPage)}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Adminsupport;
