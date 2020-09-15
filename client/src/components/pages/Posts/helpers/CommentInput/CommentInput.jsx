import React from 'react';

import './CommentInput.scss';

const CommentInput = ({ input }) => {
  console.log();

  return (
    <div>
      <input
        className="comment-input"
        placeholder="Write a comment..."
        autoComplete="off"
        type="text"
        {...input}
      />
    </div>
  );
};

export default CommentInput;
