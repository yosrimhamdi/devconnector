import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchComments } from '../../../../../redux/actions';
import Comment from './Comment';
import CommentInput from '../CommentInput';
import { addComment } from '../../../../../redux/actions';
import Spinner from '../../../../common/Spinner';

const Comments = ({
  fetchComments,
  postId,
  comments,
  handleSubmit,
  addComment,
  loading,
}) => {
  useEffect(() => {
    fetchComments(postId);
  }, [fetchComments, postId]);

  if (loading && (!comments.length || !comments)) {
    return <Spinner />;
  }

  const renderedComments = comments.map(comment => (
    <Comment comment={comment} key={comment._id} />
  ));

  const submitComment = formValues => {
    addComment(postId, formValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitComment)}>
        <Field
          name="text"
          placeholder="write a comment..."
          component={CommentInput}
        />
      </form>
      <ul className="collection">{renderedComments}</ul>
    </div>
  );
};

Comments.defaultProps = {
  comments: [],
};

const wrappedForm = reduxForm({ form: 'addComment' })(Comments);

const mapStateToProps = (state, ownProps) => ({
  comments: state.comments[ownProps.postId],
  loading: state.loading,
});

export default connect(mapStateToProps, { fetchComments, addComment })(
  wrappedForm,
);
