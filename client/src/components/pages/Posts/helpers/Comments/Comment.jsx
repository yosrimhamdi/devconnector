import React from 'react';
import { connect } from 'react-redux';

import './Comment.scss';
import getTimeStamp from '../../../../../utils/getTimeStamp';
import Settings from '../Settings';
import { deleteComment } from '../../../../../redux/actions';

const Comment = ({ comment, deleteComment }) => {
  const { _id, user, text, createdAt, post } = comment;

  return (
    <li className="post-card comment">
      <img
        src={`/images/${user.photo}`}
        className="post-card__user-image comment__user-image"
        alt="user"
      />
      <div>
        <h2 className="post-card__user-name">{user.name}</h2>
        <div className="post-card__date">{getTimeStamp(createdAt)}</div>
        <p className="post-card__text">{text}</p>
      </div>
      <Settings
        post={comment}
        deleteMessage="delete comment"
        modalTitle="delete comment?"
        modalDescription="are you sure you want to delete this comment?"
        deleteAction={() => deleteComment(post, _id)}
      />
    </li>
  );
};

export default connect(null, { deleteComment })(Comment);
