import React from 'react';

import './PostItem.scss';

import CostumLink from '../../../../common/CostumLink';
import like from './like.svg';

const PostItem = ({ post }) => (
  <div key={post._id} className="post-item">
    <div className="post-item__user-details">
      <img
        src={`/images/${post.user.photo}`}
        className="post-item__user-image"
        alt="user"
      />
      <div className="post-item__user-name">{post.user.name}</div>
    </div>
    <div>
      <p className="post-item__post-text">{post.text}</p>
      <img src={like} className="post-item__thumb-up" alt="like" />
      <CostumLink to={`/posts/${post._id}/comment`} text="comment" />
    </div>
  </div>
);

export default PostItem;
