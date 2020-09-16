import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchComments } from '../../../../../redux/actions';
import Comment from './Comment';
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
    return <Spinner />;
  }

  const renderedComments = comments.map(comment => (
    <Comment comment={comment} key={comment._id} />
  ));

  return (
    <div>
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
