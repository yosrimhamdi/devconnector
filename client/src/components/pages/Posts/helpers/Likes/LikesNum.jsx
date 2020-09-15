import React from 'react';

import './LikesNum.scss';

const LikesNum = ({ likesNum }) => {
  const likesWord = likesNum === 1 ? 'Like' : 'Likes';

  return (
    <span className="likes-num">
      <span className="likes-num__number">{likesNum}</span>
      <span className="likes-num__likes-word">{likesWord}</span>
    </span>
  );
};

export default LikesNum;
