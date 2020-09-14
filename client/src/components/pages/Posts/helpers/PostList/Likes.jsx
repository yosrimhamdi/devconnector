import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import like from '../../icons/like.svg';
import { getLikes, addLike, removeLike } from '../../../../../redux/actions';

const Likes = ({
  postId,
  postLikes = [],
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
      <button type="button" onClick={toggleLike}>
        <img src={like} className="post-item__thumb-up" alt="like" />
      </button>
      <span>{postLikes.length}</span>
    </span>
  );
};

const mapStateToProps = (state, ownProps) => ({
  postLikes: state.likes[ownProps.postId],
  user: state.auth.user,
});

export default connect(mapStateToProps, { getLikes, addLike, removeLike })(
  Likes,
);
