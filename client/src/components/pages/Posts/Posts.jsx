import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Posts.scss';

import { fetchPosts } from '../../../redux/actions';
import clearPosts from '../../../redux/actions/posts/clearPosts';

import PostList from './helpers/PostList';
import Spinner from '../../common/Spinner';
import CreatePostForm from './helpers/CreatePostForm';

const Posts = ({ fetchPosts, posts, loading, clearPosts }) => {
  useEffect(() => {
    fetchPosts();

    return clearPosts;
  }, [fetchPosts, clearPosts]);

  if (loading && !posts.length) {
    return <Spinner fullScreen />;
  }

  return (
    <div className="posts">
      <div className="posts__content">
        <CreatePostForm />
        <PostList posts={posts} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ posts, loading }) => ({ posts, loading });

export default connect(mapStateToProps, { fetchPosts, clearPosts })(Posts);
