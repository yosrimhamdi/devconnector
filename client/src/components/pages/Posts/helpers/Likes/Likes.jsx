import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import heart from '../../icons/heart.svg';
import redHeart from '../../icons/heart-red.svg';

import './Likes.scss';

import { getLikes, addLike, removeLike } from '../../../../../redux/actions';
import LikesNum from './LikesNum';

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

  const userId = user._id;

  const toggleLike = () => {
    if (postLikes.includes(userId)) {
      removeLike(userId, postId);
    } else {
      addLike(userId, postId);
    }
  };

  const icon = postLikes.includes(userId) ? redHeart : heart;

  return (
    <button type="button" onClick={toggleLike}>
      <div className="likes">
        <img src={icon} className="likes__heart" alt="like" />
        <LikesNum likesNum={postLikes.length} />
      </div>
    </button>
  );
};

const mapStateToProps = (state, ownProps) => ({
  postLikes: state.likes[ownProps.postId],
  user: state.auth.user,
});

export default connect(mapStateToProps, { getLikes, addLike, removeLike })(
  Likes,
);
