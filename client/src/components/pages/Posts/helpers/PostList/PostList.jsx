import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './PostList.scss';
import PostItem from '../PostItem';
import { fetchPosts } from '../../../../../redux/actions';
import Spinner from '../../../../common/Spinner';

const PostList = ({ posts, loading, fetchPosts }) => {
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [noPosts, setNoPosts] = useState(false);

  useEffect(() => {
    const fetchPages = async () => {
      const response = await axios.get('/api/posts/pages');

      setPages(response.data.pages);
    };

    fetchPages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { documentElement } = document;

      if (
        window.innerHeight + documentElement.scrollTop ===
        documentElement.offsetHeight
      ) {
        if (currentPage + 1 <= pages) {
          fetchPosts(currentPage + 1);

          setCurrentPage(currentPage + 1);
        } else {
          setNoPosts(true);
          document.removeEventListener('scroll', handleScroll);
        }
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [fetchPosts, setCurrentPage, currentPage, pages]);

  const renderedPosts = posts.map(post => (
    <PostItem key={post._id} post={post} />
  ));

  return (
    <ul className="post-list">
      {renderedPosts}
      {loading ? <Spinner /> : null}
      {noPosts ? 'no more posts' : ''}
    </ul>
  );
};

const mapStateToProps = ({ posts, loading }) => ({ posts, loading });

export default connect(mapStateToProps, { fetchPosts })(PostList);
