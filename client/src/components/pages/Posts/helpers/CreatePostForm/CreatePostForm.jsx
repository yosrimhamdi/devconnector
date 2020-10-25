import React, { useState } from 'react';
import { connect } from 'react-redux';

import './CreatePostForm.scss';
import getCapitalName from '../getCapitalName';
import CreatePostModal from '../CreatePostModal';

const CreatePostForm = ({ user }) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const [post, setPost] = useState('');

  const placeholder = `What's on your mind, ${getCapitalName(user.firstname)}?`;

  let inputValue = '';

  if (post && !isModalShown) {
    inputValue = post;
  }

  return (
    <form className="create-post-form">
      <img
        src={user.photo.path}
        alt={user.fullname}
        className="create-post-form__user-image"
      />
      <input
        placeholder={placeholder}
        text="text"
        className="create-post-form__input"
        spellCheck="false"
        value={inputValue}
        onChange={() => {}}
        onClick={() => setIsModalShown(true)}
      />
      <CreatePostModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
        placeholder={placeholder}
        post={post}
        setPost={setPost}
      />
    </form>
  );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps)(CreatePostForm);
