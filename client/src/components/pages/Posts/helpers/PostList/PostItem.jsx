import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import './PostItem.scss';

import DeletePostButton from '../DeletePostButton';
import Likes from '../Likes';

const PostItem = ({ post, auth }) => {
  const { _id, user, text, createdAt } = post;

  return (
    <li className="post-item">
      <div className="post-item__user-details">
        <img
          src={`/images/${user.photo}`}
          className="post-item__user-image"
          alt="user"
        />
      </div>
      <div>
        <h2 className="post-item__user-name">{user.name}</h2>
        <div className="post-item__date">
          {moment(createdAt).startOf('day').fromNow()}
        </div>
        <p className="post-item__post-text">{text}</p>
        <Likes postId={_id} />
        <DeletePostButton post={post} loggedInUser={auth.user} />
      </div>
    </li>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(PostItem);
