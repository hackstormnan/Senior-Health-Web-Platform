

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import { useUserContext } from './Usercontext';
import './Community.css'; // 引入样式文件
import env from './config';

function AllPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // 每页显示的帖子数量

  const [showAddModal, setShowAddModal] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const [showCommentModal, setShowCommentModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [commentText, setCommentText] = useState('');

  const { username } = useUserContext();

  const openCommentModal = (postId) => {
    setSelectedPostId(postId);
    setShowCommentModal(true);
    closeAddModal()
  };

  const closeCommentModal = () => {
    setSelectedPostId(null);
    setShowCommentModal(false);
    setCommentText('');
  };

  useEffect(() => {
    if (username !== '') {
      fetchAllPosts();
    }
  }, [username]);

  const fetchAllPosts = async () => {
    try {
      const response = await axios.post(env.apiUrl + '/Community', {
        newPostTitle,
        newPostContent,
        username,
        selectedPostId,
        commentText,
      });
      setAllPosts(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openAddModal = () => {
    setShowAddModal(true);
    closeCommentModal()
  };

  const closeAddModal = () => {
    setShowAddModal(false);
    setNewPostTitle('');
    setNewPostContent('');
  };

  return (
    <div className="all-posts-container">
      <h2 className="posts-title">社区论坛 Community Forum</h2>
      <button className="add-post-button" onClick={openAddModal}>
        新建发布 Add New Post
      </button>

      <ul className="post-list">
        {currentPosts.map((post, index) => (
          <li key={index} className="post-item">
            <h3 className="post-title">标题 Title: {post.title}</h3>
            <p className="post-content">内容 Content: {post.content}</p>
            <p className="post-poster">发帖人 Poster: {post.poster}</p>
            <p className="post-time">发帖时间 Post Time: {post.time}</p>
            <button
              className="comment-button"
              onClick={() => openCommentModal(post.id)}
            >
              提交留言 Submit Comment
            </button>

            <ul className="comment-list">
              {post.comments.map((comment, commentIndex) => (
                <li key={commentIndex} className="comment-item">
                  <p className="comment-text">留言 Comment: {comment.commentText}</p>
                  <p className="comment-commenter">留言者 Commenter: {comment.commenter}</p>
                  <p className="comment-time">留言时间 Comment Time: {comment.commentTime}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <Pagination
        itemsPerPage={postsPerPage}
        totalItems={allPosts.length}
        totalPages={Math.ceil(allPosts.length / postsPerPage)}
        currentPage={currentPage}
        paginate={paginate}
      />

      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeAddModal}>&times;</span>
            <h3 className="modal-title">Add a New Post / 新建发布</h3>
            <label className="modal-label">Title / 标题:</label>
            <input
              type="text"
              className="modal-input"
              placeholder="Enter title... / 输入标题"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
            />
            <label className="modal-label">Content / 内容:</label>
            <textarea
              className="modal-textarea"
              placeholder="Enter content... / 输入内容"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
            <button className="modal-button" onClick={() => fetchAllPosts()}>Add / 新建</button>
          </div>
        </div>
      )}

      {showCommentModal && (
        <div className="comment-modal">
          <div className="comment-modal-content">
            <span className="close" onClick={closeCommentModal}>&times;</span>
            <h3 className="comment-modal-title">Submit Comment / 提交留言</h3>
            <label className="comment-modal-label">Comment / 留言:</label>
            <textarea
              className="comment-modal-textarea"
              placeholder="Enter comment... / 输入留言"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button className="comment-modal-button" onClick={fetchAllPosts}>Submit / 提交</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllPosts;


