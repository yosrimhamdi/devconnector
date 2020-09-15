import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchComments } from '../../../../../redux/actions';
import Comment from './Comment';

const Comments = ({ fetchComments, postId, comments }) => {
  useEffect(() => {
    fetchComments(postId);
  }, [fetchComments, postId]);

  const renderedComments = comments.map(comment => (
    <Comment comment={comment} key={comment._id} />
  ));

  return <ul className="collection">{renderedComments}</ul>;
};

const mapStateToProps = (state, ownProps) => ({
  comments: state.comments[ownProps.postId],
});

Comments.defaultProps = {
  comments: [],
};

export default connect(mapStateToProps, { fetchComments })(Comments);
