import React from 'react';
import { connect } from 'react-redux';

import './Settings.scss';

import trash from '../../icons/trash.svg';
import dots from '../../icons/dots.svg';
import useToggle from '../../../../../hooks/useToggle';

const Settings = ({ post, auth, deleteAction, deleteMessage }) => {
  const [display, toggle] = useToggle();

  if (post.user._id !== auth.user._id) {
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
          <button type="button" onClick={deleteAction}>
            <span className="settings__message">{deleteMessage}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Settings);
