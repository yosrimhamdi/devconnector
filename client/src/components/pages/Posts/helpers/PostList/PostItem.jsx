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
        <img
          src={`/images/${user.photo}`}
          className="post-item__user-image"
          alt="user"
        />
        <div>
          <h2 className="post-item__user-name">{user.name}</h2>
          <div className="post-item__date">{getTimeStamp(createdAt)}</div>
          <p className="post-item__post-text">{text}</p>
          <div className="post-item__controller">
            <Likes postId={_id} />
            <button onClick={() => setShowComment(true)}>
              <img
                src={comment}
                alt="comment"
                className="post-item__comment-icon"
              />
              <span>Comment</span>
            </button>
          </div>
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
