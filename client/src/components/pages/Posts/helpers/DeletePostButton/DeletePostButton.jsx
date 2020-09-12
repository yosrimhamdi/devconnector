import React from 'react';
import { connect } from 'react-redux';

import './DeletePostButton.scss';

import remove from '../../icons/remove.svg';
import { deletePost } from '../../../../../redux/actions';

const DeletePostButton = ({ post, loggedInUser, deletePost }) => {
  if (post.user._id !== loggedInUser._id) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => deletePost(post._id)}
      className="delete-post-button"
    >
      <img
        src={remove}
        alt="remove button"
        className="delete-post-button__icon"
        title="delete post"
      />
    </button>
  );
};

export default connect(null, { deletePost })(DeletePostButton);
