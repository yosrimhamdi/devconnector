import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './PostItem.scss';

import DeletePostButton from '../DeletePostButton';
import like from './like.svg';

const PostItem = ({ post, auth }) => {
  const { _id, user, text } = post;

  return (
    <li className="post-item">
      <div className="post-item__user-details">
        <img
          src={`/images/${user.photo}`}
          className="post-item__user-image"
          alt="user"
        />
        <div className="post-item__user-name">{user.name}</div>
      </div>
      <div>
        <p className="post-item__post-text">{text}</p>
        <img src={like} className="post-item__thumb-up" alt="like" />
        <Link to={`/posts/${_id}/comment`} className="link">
          comment
        </Link>
        <DeletePostButton post={post} loggedInUser={auth.user} />
      </div>
    </li>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(PostItem);
