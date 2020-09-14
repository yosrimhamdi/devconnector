import React from 'react';

import './LikesNum.scss';

const LikesNum = ({ likesNum }) => {
  if (likesNum === 0) {
    return null;
  }

  return (
    <span className="likes-num">
      <span>{likesNum}</span>
      <span className="likes-num__likes-word">likes</span>
    </span>
  );
};

export default LikesNum;
