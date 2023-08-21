import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';


function Healthactivities() {
  const [allActivities, setallActivities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activitiesPerPage] = useState(5); // 每页显示的文章数量

  

  useEffect(() => {
    const fetchAllActivities = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/Healthactivities');
        setallActivities(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllActivities();
  }, []);

  // 获取当前页面显示的文章
  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = allActivities.slice(indexOfFirstActivity, indexOfLastActivity);

  console.log(currentActivities)

  // 分页切换函数
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div>
      <h2>全部活动 All Activities</h2>
      <ul>
        {currentActivities.map((activity, index) => (
        <li key={index}>
            <h3>活动标题 Activity Title: {activity.title}</h3>
            <p>活动内容 Activity Content: {activity.content}</p>
            <p>简介 Summary: {activity.summary}</p>
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
