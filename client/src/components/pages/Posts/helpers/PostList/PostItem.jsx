import React from 'react';
import './PostItem.scss';

import Settings from '../Settings';
import Likes from '../Likes';
import getTimeStamp from '../../../../../utils/getTimeStamp';
import { deletePost } from '../../../../../redux/actions';
import Comments from '../Comments';
import { connect } from 'react-redux';

const PostItem = ({ post, deletePost }) => {
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
          <Settings
            post={post}
            deleteMessage="delete post"
            deleteAction={() => deletePost(_id)}
          />
        </div>
      </div>
      <Comments postId={_id} />
    </li>
  );
};

export default connect(null, { deletePost })(PostItem);
