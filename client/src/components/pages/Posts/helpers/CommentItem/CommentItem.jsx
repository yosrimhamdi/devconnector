import React from 'react';
import { connect } from 'react-redux';

import './CommentItem.scss';
import getElapsedTime from '../getElapsedTime';
import Settings from '../Settings';
import { deleteComment } from '../../../../../redux/actions';
import ModalContext from '../../../../../contexts/ModalContext';

const Comment = ({ comment, deleteComment }) => {
  const { _id, user, text, createdAt, post } = comment;

  const modalDetails = {
    title: 'delete comment?',
    description: 'are you sure you want to delete this comment?',
    action: () => deleteComment(post, _id),
  };

  if (window.innerWidth < 601) {
    return (
      <li className="comment-item">
        <div className="comment-item__user-details">
          <img
            src={user.photo}
            className="comment-item__user-image"
            alt={user.fullname}
          />
          <div>
            <h2 className="comment-item__user-name">{user.fullname}</h2>
            <div className="comment-item__date">
              {getElapsedTime(createdAt)}
            </div>
          </div>
        </div>
        <div className="comment-item__content">
          <p className="comment-item__text">{text}</p>
        </div>
        <ModalContext.Provider value={modalDetails}>
          <Settings relatedUser={comment.user} deleteMessage="delete comment" />
        </ModalContext.Provider>
      </li>
    );
  }

  return (
    <li className="comment-item">
      <img
        src={user.photo}
        className="comment-item__user-image"
        alt={user.fullname}
      />
      <div className="comment-item__content">
        <h2 className="comment-item__user-name">{user.fullname}</h2>
        <div className="comment-item__date">{getElapsedTime(createdAt)}</div>
        <p className="comment-item__text">{text}</p>
      </div>
      <ModalContext.Provider value={modalDetails}>
        <Settings relatedUser={comment.user} deleteMessage="delete comment" />
      </ModalContext.Provider>
    </li>
  );
};

export default connect(null, { deleteComment })(Comment);
