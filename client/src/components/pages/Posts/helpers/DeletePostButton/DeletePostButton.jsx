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
    <div>
      <div>...</div>
    </div>
  );
};

export default connect(null, { deletePost })(DeletePostButton);
