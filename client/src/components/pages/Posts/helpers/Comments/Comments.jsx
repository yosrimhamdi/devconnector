import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchComments } from '../../../../../redux/actions';
import Comment from './Comment';
import AddCommentInput from '../AddCommentInput';
import Spinner from '../../../../common/Spinner';

const Comments = ({ fetchComments, postId, comments, loading }) => {
  useEffect(() => {
    fetchComments(postId);
  }, [fetchComments, postId]);

  if (loading && (!comments.length || !comments)) {
    return <Spinner />;
  }

  const renderedComments = comments.map(comment => (
    <Comment comment={comment} key={comment._id} />
  ));

  return (
    <div>
      <AddCommentInput postId={postId} />
      <ul className="collection">{renderedComments}</ul>
    </div>
  );
};

Comments.defaultProps = {
  comments: [],
};

const mapStateToProps = (state, ownProps) => ({
  loading: state.loading,
  comments: state.comments[ownProps.postId],
});

export default connect(mapStateToProps, { fetchComments })(Comments);
