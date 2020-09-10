import React from 'react';
import { connect } from 'react-redux';

import './DeletePostButton.scss';

import remove from './remove.svg';
import { deletePost } from '../../../../../redux/actions';

class DeletePostButton extends React.Component {
  deletePost = () => {
    this.props.deletePost(this.props.post._id);
  };

  render() {
    const { post, loggedInUser } = this.props;
    if (post.user._id !== loggedInUser._id) {
      return null;
    }

    return (
      <button
        type="button"
        onClick={this.deletePost}
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
  }
}

export default connect(null, { deletePost })(DeletePostButton);
