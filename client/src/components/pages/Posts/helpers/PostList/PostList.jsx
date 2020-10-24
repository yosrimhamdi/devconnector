import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './PostList.scss';
import PostItem from '../PostItem';
import { fetchPosts } from '../../../../../redux/actions';
import Spinner from '../../../../common/Spinner';
import postsAPI from '../../../../../apis/posts';
import EndOfContent from '../../../../common/EndOfContent';

const PostList = ({ posts, loading, fetchPosts }) => {
  const [pages, setPages] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPages = async () => {
      const response = await postsAPI.get('/pages');

      setPages(response.data.pages);
    };

    fetchPages();
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

        setCurrentPage(currentPage + 1);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [currentPage, fetchPosts, pages, loading]);

  const renderedPosts = posts.map(post => (
    <PostItem key={post._id} post={post} />
  ));

  return (
    <>
      <ul className="post-list">{renderedPosts}</ul>
      <Spinner visilbe={loading} />
      <EndOfContent currentPage={currentPage} pages={pages} loading={loading} />
    </>
  );
};

const mapStateToProps = ({ posts, loading }) => ({ posts, loading });

export default connect(mapStateToProps, { fetchPosts })(PostList);
