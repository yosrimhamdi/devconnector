import React from 'react';

import './LikesNum.scss';

const LikesNum = ({ likesNum }) => {
  if (likesNum === 0) {
    return null;
  }

  const likesWord = likesNum === 1 ? 'like' : 'likes';

  return (
    <span className="likes-num">
      <span>{likesNum}</span>
      <span className="likes-num__likes-word">{likesWord}</span>
    </span>
  );
};

export default LikesNum;
