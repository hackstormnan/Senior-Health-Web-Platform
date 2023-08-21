import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';



function Healthknowledge() {
  return (
    <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <h2>健康知识</h2>
        <p>欢迎来到健康知识主界面！这里提供了丰富的健康相关信息，帮助您了解如何保持身体健康、预防疾病以及改善生活质量。</p>
      </div>
      <div>
        <h2>Health Knowledge</h2>
        <p>Welcome to the Health Knowledge main page! Here, you'll find a wealth of information about health to help you understand how to maintain a healthy body, prevent diseases, and improve your quality of life.</p>
      </div>
    </div>
    <ul>
      <li><Link to="/Searchjournal">搜索文章 / Search Journal</Link></li>
      <li><Link to="/Alljournal">全部文章 / All Journal</Link></li>
    </ul>
    </div>
  );
}


export default Healthknowledge;






