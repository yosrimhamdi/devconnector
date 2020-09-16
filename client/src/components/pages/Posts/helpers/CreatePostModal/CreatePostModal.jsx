import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import './CreatePostModal.scss';
import { createPost } from '../../../../../redux/actions';

const CreatePostModal = ({
  placeholder,
  post,
  setPost,
  createPost,
  isModalShown,
  setIsModalShown,
}) => {
  if (!isModalShown) {
    return null;
  }

  const hideModal = () => setIsModalShown(false);

  const submitPost = e => {
    e.preventDefault();

    if (post) {
      createPost({ text: post });

      setPost('');

      hideModal();
    }
  };

  const buttonClassName = classnames('add-post-modal__button', {
    'add-post-modal__button--valid': post,
  });

  const modal = (
    <div className="add-post-modal" onClick={hideModal}>
      <div
        className="add-post-modal__content"
        onClick={e => e.stopPropagation()}
      >
        <h1 className="add-post-modal__title">create post</h1>
        <form onSubmit={submitPost}>
          <textarea
            placeholder={placeholder}
            className="add-post-modal__textarea"
            spellCheck="false"
            value={post}
            onChange={e => setPost(e.target.value)}
            autoFocus
          ></textarea>
          <button className={buttonClassName}>post</button>
        </form>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
};

export default connect(null, { createPost })(CreatePostModal);
