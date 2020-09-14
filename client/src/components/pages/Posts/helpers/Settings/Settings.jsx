import React from 'react';
import { connect } from 'react-redux';

import './Settings.scss';

import trash from '../../icons/trash.svg';
import dots from '../../icons/dots.svg';
import { deletePost } from '../../../../../redux/actions';
import useToggle from '../../../../../hooks/useToggle';

const Settings = ({ post, loggedInUser, deletePost }) => {
  const [display, toggle] = useToggle();

  if (post.user._id !== loggedInUser._id) {
    return null;
  }

  return (
    <div className="settings">
      <div className="settings__open-menu-wrapper">
        <button type="button" onClick={toggle}>
          <img src={dots} alt="open menu" className="settings__open-menu" />
        </button>
      </div>
      <div className="settings__wrapper" style={{ display }}>
        <div className="settings__delete">
          <img src={trash} alt="trash" className="settings__trash-icon" />
          <button type="button" onClick={() => deletePost(post._id)}>
            <span className="settings__message">Delete post</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deletePost })(Settings);
