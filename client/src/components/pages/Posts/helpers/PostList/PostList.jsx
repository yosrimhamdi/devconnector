import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';

import './PostList.scss';
import PostItem from '../PostItem';
import { fetchPosts } from '../../../../../redux/actions';
import Spinner from '../../../../common/Spinner';

const PostList = ({ posts, loading, fetchPosts }) => {
  const postListRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const { current: postList } = postListRef;

      if (postList) {
        const { offsetTop, clientHeight } = postList;

        const postListBounding = clientHeight + offsetTop - window.innerHeight;

        if (postListBounding - window.scrollY < 2) {
          const nextPage = currentPage + 1;

          fetchPosts(nextPage);

          setCurrentPage(nextPage);

          document.removeEventListener('scroll', handleScroll);
        }
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [currentPage, fetchPosts]);

  const renderedPosts = posts.map(post => (
    <PostItem key={post._id} post={post} />
  ));

  return (
    <ul className="post-list" ref={postListRef}>
      {renderedPosts}
      {loading ? <Spinner /> : null}
    </ul>
  );
};

const mapStateToProps = ({ posts, loading }) => ({ posts, loading });

export default connect(mapStateToProps, { fetchPosts })(PostList);
