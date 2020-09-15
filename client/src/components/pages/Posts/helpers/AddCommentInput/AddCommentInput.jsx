import React, { useState } from 'react';
import { connect } from 'react-redux';

import './AddCommentInput.scss';
import { addComment } from '../../../../../redux/actions';

const AddCommentInput = ({ addComment, postId }) => {
  const [message, setMessage] = useState('');

  const submitComment = e => {
    e.preventDefault();

    if (message) {
      addComment(postId, { text: message });

      setMessage('');
    }
  };

  return (
    <form onSubmit={submitComment}>
      <input
        className="add-comment-input"
        placeholder="write a comment..."
        autoComplete="off"
        value={message}
        type="text"
        onChange={e => setMessage(e.target.value)}
      />
    </form>
  );
};

export default connect(null, { addComment })(AddCommentInput);
