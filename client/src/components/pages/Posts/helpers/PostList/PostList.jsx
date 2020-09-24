import React from 'react';

import './PostList.scss';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  const renderedPosts = posts.map(post => (
    <PostItem key={post._id} post={post} />
  ));

  return <ul className="post-list">{renderedPosts}</ul>;
};

export default PostList;
