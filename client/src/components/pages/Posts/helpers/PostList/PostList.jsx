import React from 'react';

import PostItem from './PostItem';

const PostList = ({ posts }) => {
  const renderedPosts = posts.map(post => (
    <PostItem key={post._id} post={post} />
  ));

  return <ul className="collection">{renderedPosts}</ul>;
};

export default PostList;
