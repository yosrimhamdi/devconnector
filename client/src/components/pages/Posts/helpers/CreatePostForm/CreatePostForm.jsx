import React, { useState } from 'react';
import { connect } from 'react-redux';

import './CreatePostForm.scss';
import getCapitalFirstName from '../../../../../utils/getCapitalFirstName';
import CreatePostModal from '../CreatePostModal';

const CreatePostForm = ({ user }) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const [post, setPost] = useState('');

  const placeholder = `What's on your mind, ${getCapitalFirstName(
    user.firstname,
  )}?`;

  let inputValue = '';

  if (post && !isModalShown) {
    inputValue = post;
  }

  return (
    <form className="add-post-form">
      <img
        src={`/images/${user.photo}`}
        alt={user.fullname}
        className="add-post-form__user-image"
      />
      <input
        placeholder={placeholder}
        text="text"
        className="add-post-form__input"
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
