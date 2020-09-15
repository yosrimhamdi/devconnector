import React, { useState } from 'react';
import { connect } from 'react-redux';

import './PostItem.scss';
import Settings from '../Settings';
import Likes from '../Likes';
import getTimeStamp from '../../../../../utils/getTimeStamp';
import { deletePost } from '../../../../../redux/actions';
import Comments from '../Comments';
import comment from '../../icons/comment.svg';

const PostItem = ({ post, deletePost }) => {
  const [showComment, setShowComment] = useState(false);

  const { _id, user, text, createdAt } = post;

  return (
    <li className="post-item">
      <div className="post-item__wrapper">
        <div className="post-item__user-details">
          <img
            src={`/images/${user.photo}`}
            className="post-item__user-image"
            alt="user"
          />
        </div>
        <div>
          <h2 className="post-item__user-name">{user.name}</h2>
          <div className="post-item__date">{getTimeStamp(createdAt)}</div>
          <p className="post-item__post-text">{text}</p>
          <Likes postId={_id} />
          <button
            className="post-item__comment"
            onClick={() => setShowComment(true)}
          >
            <img
              src={comment}
              alt="comment"
              className="post-item__comment-icon"
            />
            <span className="post-item__comment-message">comment</span>
          </button>
          <Settings
            post={post}
            deleteMessage="delete post"
            deleteAction={() => deletePost(_id)}
            modalTitle="delete post?"
            modalDescription="are you sure you want to delete this post?"
          />
        </div>
      </div>
      {showComment ? <Comments postId={_id} /> : null}
    </li>
  );
};

export default connect(null, { deletePost })(PostItem);
