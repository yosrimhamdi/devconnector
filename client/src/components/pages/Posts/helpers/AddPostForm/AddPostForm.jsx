import React, { useState } from 'react';
import { connect } from 'react-redux';

import './AddPostForm.scss';
import getUserFirstName from '../../../../../utils/getUserFirstName';
import AddPostModal from '../AddPostModal';

const AddPostForm = ({ user }) => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [post, setPost] = useState('');

  let value = '';

  if ((post, showPostModal === false)) {
    value = post;
  }

  const userFirstName = getUserFirstName(user.name);
  const placeholder = `What's on your mind, ${userFirstName}?`;

  return (
    <form className="add-post-form">
      <img
        src={`/images/${user.photo}`}
        alt={user.name}
        className="add-post-form__user-image"
      />
      <input
        placeholder={placeholder}
        text="text"
        className="add-post-form__input"
        spellCheck="false"
        value={value}
        onChange={() => {}}
        onClick={() => setShowPostModal(true)}
      />
      <AddPostModal
        showPostModal={showPostModal}
        setShowPostModal={setShowPostModal}
        post={post}
        setPost={setPost}
        user={user}
        placeholder={placeholder}
      />
    </form>
  );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps)(AddPostForm);
