import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import like from '../../icons/like.svg';
import { getLikes, addLike, removeLike } from '../../../../../redux/actions';

const Likes = ({
  postId,
  likesNum,
  postLikes,
  getLikes,
  addLike,
  removeLike,
  user,
}) => {
  useEffect(() => {
    getLikes(postId);
  }, [getLikes, postId]);

  const toggleLike = () => {
    const userId = user._id;

    if (postLikes.includes(userId)) {
      removeLike(userId, postId);
    } else {
      addLike(userId, postId);
    }
  };

  return (
    <span>
      <button type="button">
        <img
          src={like}
          className="post-item__thumb-up"
          alt="like"
          onClick={toggleLike}
        />
      </button>
      <span>{likesNum}</span>
    </span>
  );
};

const mapStateToProps = (state, ownProps) => {
  const likes = state.likes[ownProps.postId];

  return {
    likesNum: likes ? likes.length : 0,
    postLikes: likes,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, { getLikes, addLike, removeLike })(
  Likes,
);
