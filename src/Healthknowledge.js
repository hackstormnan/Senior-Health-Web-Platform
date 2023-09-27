import React from 'react';
import { Link } from 'react-router-dom';
import './Healthknowledge.css'; // Import your custom styles for Healthknowledge here

function Healthknowledge() {
  return (
    <div className="health-knowledge-container">
      <div className="health-knowledge-text">
        <h2>Health Knowledge</h2>
        <p>Welcome to the Health Knowledge main page! Here, you will dive into a wealth of health knowledge focused on helping you gain deeper
           insights into maintaining a healthy body, preventing diseases, and enhancing your quality of life. This page primarily provides 
           articles related to health, allowing you to explore a variety of knowledge and information in the field of health.

            If you have specific topics of interest, you can use the "Search Journal" feature to find articles related to subjects you care about. 
            Alternatively, if you want to browse through a collection of articles all at once, you can choose "All Journal,"
             where you'll find articles covering a wide range of health-related topics, including diet, exercise, mental health, disease prevention, 
             and more.</p>
      </div>
      <div className="health-knowledge-text">
        <h2>健康知识</h2>
        <p>欢迎来到健康知识主界面！在这里，您将进入一个丰富的健康知识世界，专注于帮助您深入了解如何保持身体健康、预防疾病，以及改善生活质量。
          这个页面主要专注于提供与健康相关的文章，让您能够更深入地了解健康领域的各种知识和信息。

          如果您有特定的话题感兴趣，可以使用“搜索文章”功能来查找与您关心的主题相关的文章。而如果您想要一次性浏览更多文章，可以选择“浏览全部文章”，
          这里汇集了各种关于健康的文章，涵盖了饮食、锻炼、心理健康、疾病预防等多个方面的内容。</p>
      </div>
      <ul className="health-knowledge-links">
        <li><Link className="link" to="/Searchjournal">搜索文章 / Search Journal</Link></li>
        <li><Link className="link" to="/Alljournal">全部文章 / All Journal</Link></li>
      </ul>
    </div>
  );
}

export default Healthknowledge;
