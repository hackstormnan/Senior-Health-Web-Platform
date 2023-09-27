import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="homepage-background">
        <div className="intro-background">
          <div className="intro">
            <h1 className="title">Welcome to the Elderly Health Care Portal! / 欢迎来到老年人健康护理门户网站！</h1>
            <p>
            We sincerely welcome you to our health care portal. This is the place to go for professional health services and resources for you. 
            Whether you are looking for health knowledge, participating in health activities, or keeping up to date with the latest health information, we are ready to provide you with comprehensive assistance. / 我们真诚欢迎您来到我们的健康护理门户网站。这里是为您提供专业健康服务和资源的地方。无论您是在寻找健康知识、参与健康活动，还是了解最新的健康资讯，我们都愿意为您提供全面的帮助。
            </p>
            <p>
              When you log in, you will find more exciting features and content waiting for you. Your health and well-being is our pursuit, so let's explore this caring community together!
              We encourage you to participate actively in the community forums and share your experiences, suggestions and questions with other users. Your participation is important to learning and growing together.
              If you have any questions or needs, you can contact us at any time. We are happy to provide you with support and assistance. / 当您登录后，您将会发现更多的精彩功能和内容等待着您。您的健康和幸福是我们的追求，让我们一同探索这个充满关爱的社区！
              我们鼓励您积极参与社区论坛，与其他用户分享您的经验、建议和问题。您的参与对于共同学习和成长非常重要，
              如有任何疑问或需求，您可以随时与我们联系。我们乐意为您提供支持和帮助。
            </p>

          </div>
        </div>
      </div>
      <div className="public-content">
        <p>Entry / 入口</p>
        <ul className="link-list">
          <li className="link-list-item">
            <Link className="link" to="/Healthknowledge">
              Health Knowledge / 健康知识
            </Link>
          </li>
          <li className="link-list-item">
            <Link className="link" to="/Healthactivities">
              Health Activities / 健康活动
            </Link>
          </li>
          <li className="link-list-item">
            <Link className="link" to="/News">
              News and Information / 新闻和资讯
            </Link>
          </li>
        </ul>
      </div>
      <div className="login-link">
        <Link className="link" to="/Login">
        Login / 登录
        </Link>
      </div>
      <div className="bottom-picture"></div>
    </div>
  );
}

export default Homepage;
