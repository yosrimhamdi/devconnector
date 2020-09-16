import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import './AddPostModal.scss';
import { createPost } from '../../../../../redux/actions';

const AddPostModal = ({
  user,
  placeholder,
  createPost,
  showPostModal,
  setShowPostModal,
  post,
  setPost,
}) => {
  let modal = null;

  const hidePostModal = () => setShowPostModal(false);

  const submitPost = e => {
    e.preventDefault();

    if (post) {
      createPost({ text: post });

      setPost('');

      hidePostModal();
    }
  };

  const buttonClassName = classnames('add-post-modal__button', {
    'add-post-modal__button--valid': post,
  });

  if (showPostModal) {
    modal = (
      <div className="add-post-modal" onClick={hidePostModal}>
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
  }

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
};

export default connect(null, { createPost })(AddPostModal);
