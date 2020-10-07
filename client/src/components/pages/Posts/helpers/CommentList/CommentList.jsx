import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './CommentList.scss';
import { fetchComments } from '../../../../../redux/actions';
import CommentItem from '../CommentItem';
import CreateCommentForm from '../CreateCommentForm';
import Spinner from '../../../../common/Spinner';

const Comments = ({
  fetchComments,
  postId,
  isCommentsShown,
  comments,
  loading,
}) => {
  useEffect(() => {
    if (isCommentsShown) {
      fetchComments(postId);
    }
  }, [fetchComments, postId, isCommentsShown]);

  if ((!loading && !comments) || !isCommentsShown) {
    return null;
  }

  if (loading && !comments) {
    return <Spinner spaceAround />;
  }

  const renderedComments = comments.map(comment => (
    <CommentItem comment={comment} key={comment._id} />
  ));

  return (
    <div className="comment-list">
      <CreateCommentForm postId={postId} />
      <ul className="collection">{renderedComments}</ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  loading: state.loading,
  comments: state.comments[ownProps.postId],
});

export default connect(mapStateToProps, { fetchComments })(Comments);
