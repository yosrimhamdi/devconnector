import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import './Posts.scss';

import { fetchPosts, createPost } from '../../../redux/actions';
import validate from './validate';
import { Input } from '../../common/form';
import PostList from './helpers/PostList';
import Spinner from '../../common/Spinner';

const Posts = ({ fetchPosts, createPost, posts, handleSubmit, loading }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading && !posts.length) {
    return <Spinner />;
  }

  return (
    <div className="posts">
      <form
        noValidate
        onSubmit={handleSubmit(createPost)}
        className="posts__form"
      >
        <Field
          name="text"
          placeholder="create a post"
          autocomplete="off"
          component={Input}
        />
        <button className="form__submit-btn" type="submit">
          submit
        </button>
      </form>
      <PostList posts={posts} />
    </div>
  );
};

const wrappedForm = reduxForm({ form: 'createPost', validate })(Posts);

const mapStateToProps = ({ posts, loading }) => ({ posts, loading });

export default connect(mapStateToProps, { fetchPosts, createPost })(
  wrappedForm,
);
