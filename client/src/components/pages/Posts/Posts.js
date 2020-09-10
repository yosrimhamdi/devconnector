import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import './Posts.scss';

import { fetchPosts, createPost } from '../../../redux/actions';
import validate from './validate';
import { TextArea } from '../../common/form';
import PostList from './helpers/PostList';

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  onFormSubmit = formValues => {
    this.props.createPost(formValues);
  };

  render() {
    return (
      <div className="posts">
        <form
          noValidate
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
          className="posts__form"
        >
          <Field name="text" placeholder="create a post" component={TextArea} />
          <button className="form__submit-btn" type="submit">
            submit
          </button>
        </form>
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}

const wrappedForm = reduxForm({ form: 'createPost', validate })(Posts);

const mapStateToProps = ({ posts }) => ({ posts: Object.values(posts) });

export default connect(mapStateToProps, { fetchPosts, createPost })(
  wrappedForm,
);
