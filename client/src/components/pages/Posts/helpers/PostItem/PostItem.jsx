import React, { useState } from 'react';
import { connect } from 'react-redux';

import './PostItem.scss';
import Settings from '../Settings';
import Likes from '../Likes';
import getElapsedTime from '../getElapsedTime';
import { deletePost } from '../../../../../redux/actions';
import CommentList from '../CommentList';
import comment from '../../icons/comment.svg';
import ModalContext from '../../../../../contexts/ModalContext';

const PostItem = ({ post, deletePost }) => {
  const [isCommentsShown, setIsCommentsShown] = useState(false);

  const { _id, user, text, createdAt } = post;

  const modalDetails = {
    title: 'delete post?',
    description: 'are you sure you want to delete this post?',
    action: () => deletePost(_id),
  };

  if (window.innerWidth < 601) {
    return (
      <li className="post-item">
        <div className="post-item__wrapper">
          <div className="post-item__user-details">
            <img
              src={user.photo.path}
              className="post-item__user-image"
              alt={user.fullname}
            />
            <div>
              <h2 className="post-item__user-name">{user.fullname}</h2>
              <div className="post-item__date">{getElapsedTime(createdAt)}</div>
            </div>
          </div>
          <div className="post-item__content">
            <p className="post-item__text">{text}</p>
            <div className="post-item__controller">
              <Likes postId={_id} />
              <div
                className="post-item__comment-wrapper"
                role="button"
                onClick={() => setIsCommentsShown(true)}
              >
                <img
                  src={comment}
                  alt="comment"
                  className="post-item__comment-icon"
                />
                <span>Comment</span>
              </div>
            </div>
            <ModalContext.Provider value={modalDetails}>
              <Settings relatedUser={post.user} deleteMessage="delete post" />
            </ModalContext.Provider>
          </div>
        </div>
        <CommentList postId={_id} isCommentsShown={isCommentsShown} />
      </li>
    );
  }

  return (
    <li className="post-item">
      <div className="post-item__wrapper">
        <img
          src={user.photo.path}
          className="post-item__user-image"
          alt={user.fullname}
        />
        <div className="post-item__content">
          <h2 className="post-item__user-name">{user.fullname}</h2>
          <div className="post-item__date">{getElapsedTime(createdAt)}</div>
          <p className="post-item__text">{text}</p>
          <div className="post-item__controller">
            <Likes postId={_id} />
            <div
              className="post-item__comment-wrapper"
              role="button"
              onClick={() => setIsCommentsShown(true)}
            >
              <img
                src={comment}
                alt="comment"
                className="post-item__comment-icon"
              />
              <span>Comment</span>
            </div>
          </div>
          <ModalContext.Provider value={modalDetails}>
            <Settings relatedUser={post.user} deleteMessage="delete post" />
          </ModalContext.Provider>
        </div>
      </div>
      <CommentList postId={_id} isCommentsShown={isCommentsShown} />
    </li>
  );
};

export default connect(null, { deletePost })(PostItem);
