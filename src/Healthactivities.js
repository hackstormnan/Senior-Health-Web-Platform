import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import './Healthactivities.css'; // 导入 Healthactivities 的样式文件
import env from './config';

function Healthactivities() {
  const [allActivities, setallActivities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activitiesPerPage] = useState(5); // 每页显示的活动数量

  useEffect(() => {
    const fetchAllActivities = async () => {
      try {
        const response = await axios.get(env.apiUrl + '/Healthactivities');
        setallActivities(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllActivities();
  }, []);

  // 获取当前页面显示的活动
  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = allActivities.slice(indexOfFirstActivity, indexOfLastActivity);

  // 分页切换函数
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="healthactivities-container">
      <h2 className="healthactivities-title">All Activities / 全部活动</h2>
      <ul className="healthactivities-list">
        {currentActivities.map((activity, index) => (
          <li key={index} className="healthactivities-item">
            <h3 className="activity-title">Activity Title / 活动标题: {activity.title}</h3>
            <p className="activity-content">Activity Content / 活动内容: {activity.content}</p>
            <p className="activity-summary">Activity Summary / 活动简介: {activity.summary}</p>
          </li>
        ))}
      </ul>
      <Pagination
        itemsPerPage={activitiesPerPage}
        totalItems={allActivities.length}
        totalPages={Math.ceil(allActivities.length / activitiesPerPage)}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Healthactivities;
