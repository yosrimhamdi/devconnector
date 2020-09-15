import React from 'react';

import './Comment.scss';
import getTimeStamp from '../../../../../utils/getTimeStamp';

const Comment = ({ comment }) => {
  const { user, text, createdAt } = comment;

  return (
    <li className="comment">
      <div className="comment__user-details">
        <img
          src={`/images/${user.photo}`}
          className="comment__user-image"
          alt="user"
        />
      </div>
      <div>
        <h2 className="comment__user-name">{user.name}</h2>
        <div className="comment__date">{getTimeStamp(createdAt)}</div>
        <p className="comment__post-text">{text}</p>
      </div>
    </li>
  );
};

export default Comment;
