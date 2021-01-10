import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Posts.scss';

import fetchPosts from '../../../redux/actions/posts/fetchPosts';
import fetchPostPages from '../../../redux/actions/posts/fetchPostPages';
import updateCurrentPage from '../../../redux/actions/posts/updateCurrentPage';

import Spinner from '../../common/Spinner';
import CreatePostForm from './helpers/CreatePostForm';
import PostItem from './helpers/PostItem';
import EndOfContent from '../../common/EndOfContent';
import Nav from '../../layouts/Nav';

const Posts = ({
  fetchPosts,
  fetchPostPages,
  updateCurrentPage,
  posts: { data, pages, currentPage },
  loading,
}) => {
  useEffect(() => {
    if (!data) {
      fetchPosts(1);

      fetchPostPages();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.documentElement.offsetHeight - 100 <=
          window.innerHeight + document.documentElement.scrollTop &&
        !loading &&
        currentPage + 1 <= pages
      ) {
        fetchPosts(currentPage + 1);

        updateCurrentPage(currentPage + 1);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [currentPage, fetchPosts, pages, loading]);

  let renderedPosts = null;

  if (data) {
    renderedPosts = data.map(post => <PostItem key={post._id} post={post} />);
  }

  return (
    <>
      <Nav />
      <div className="posts">
        <CreatePostForm visible={data} />
        <ul className="posts__content">{renderedPosts}</ul>
        <Spinner visible={loading} fullScreen={!data} />
        <EndOfContent
          currentPage={currentPage}
          pages={pages}
          loading={loading}
        />
      </div>
    </>
  );
};

const mapStateToProps = ({ posts, loading }) => ({
  posts,
  loading,
});

export default connect(mapStateToProps, {
  fetchPosts,
  fetchPostPages,
  updateCurrentPage,
})(Posts);
