import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import './CreatePostModal.scss';
import { createPost } from '../../../../../redux/actions';
import ModalCloseButton from '../../../../common/modal/ModalCloseButton';
import Spinner from '../../../../common/Spinner';
import useDisableScroll from '../../../../../hooks/useDisableScroll';

const CreatePostModal = ({
  placeholder,
  post,
  setPost,
  createPost,
  isModalShown,
  setIsModalShown,
  loading,
}) => {
  const textAreaRef = useRef(null);

  useDisableScroll(isModalShown);

  useEffect(() => {
    const moveCursorToEnd = field => {
      const el = field;

      if (typeof el.selectionStart === 'number') {
        el.selectionStart = el.value.length;
        el.selectionEnd = el.value.length;
      } else if (typeof el.createTextRange !== 'undefined') {
        el.focus();
        const range = el.createTextRange();

        range.collapse(false);
        range.select();
      }
    };

    if (textAreaRef.current) {
      moveCursorToEnd(textAreaRef.current);
    }
  });

  if (!isModalShown) {
    return null;
  }

  const removeModalFromScreen = () => {
    if (!loading) {
      setIsModalShown(false);
    }
  };

  const clean = () => {
    setPost('');

    removeModalFromScreen();
  };

  const submitPost = e => {
    e.preventDefault();

    if (post) {
      createPost({ text: post }, clean);
    }
  };

  const buttonClassName = classnames('create-post-modal__button', {
    'create-post-modal__button--valid': post,
  });

  const modal = (
    <div
      className="create-post-modal"
      role="button"
      onClick={removeModalFromScreen}
      tabIndex="0"
    >
      <div
        className="create-post-modal__content"
        onClick={e => e.stopPropagation()}
        role="button"
      >
        <div className="create-post-modal__header">
          <h1 className="create-post-modal__title">create post</h1>
          <ModalCloseButton onClick={removeModalFromScreen} />
        </div>
        <form onSubmit={submitPost}>
          <textarea
            ref={textAreaRef}
            placeholder={placeholder}
            className="create-post-modal__textarea"
            spellCheck="false"
            value={post}
            onChange={e => setPost(e.target.value)}
            autoFocus
          />
          <button className={buttonClassName} type="submit">
            post
          </button>
        </form>
        <Spinner visible={loading} onContent />
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
};

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps, { createPost })(CreatePostModal);
