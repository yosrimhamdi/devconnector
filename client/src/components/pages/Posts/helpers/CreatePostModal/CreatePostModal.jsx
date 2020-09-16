import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import './CreatePostModal.scss';
import { createPost } from '../../../../../redux/actions';
import ModalCloseButton from '../../../../common/ModalCloseButton';

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

  const removeModalFromScreen = () => setIsModalShown(false);

  const submitPost = e => {
    e.preventDefault();

    if (post) {
      createPost({ text: post });

      setPost('');

      removeModalFromScreen();
    }
  };

  const buttonClassName = classnames('create-post-modal__button', {
    'create-post-modal__button--valid': post,
  });

  const modal = (
    <div className="modal create-post-modal" onClick={removeModalFromScreen}>
      <div
        className="modal__content modal__content--500w modal__content--padding"
        onClick={e => e.stopPropagation()}
      >
        <h1 className="create-post-modal__title">create post</h1>
        <ModalCloseButton onClick={removeModalFromScreen} />
        <form onSubmit={submitPost}>
          <textarea
            placeholder={placeholder}
            className="create-post-modal__textarea"
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
