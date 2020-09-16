import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import './Settings.scss';

import trash from '../../icons/trash.svg';
import dots from '../../icons/dots.svg';
import useToggle from '../../../../../hooks/useToggle';
import ConfirmModal from '../../../../common/ConfirmModal';

const Settings = ({ post, auth, deleteAction, deleteMessage }) => {
  const dotsRef = useRef(null);
  const settingsRef = useRef(null);
  const [display, toggle] = useToggle();
  const [isModalShown, setIsModalShown] = useState(false);

  useEffect(() => {
    const { current: DOMsettings } = settingsRef;
    const { current: DOMdots } = dotsRef;

    const handleClickOutside = ({ target }) => {
      if (
        DOMsettings &&
        !DOMsettings.contains(target) &&
        target !== DOMdots &&
        display === 'block'
      ) {
        toggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  if (post.user._id !== auth.user._id) {
    return null;
  }

  return (
    <div className="settings">
      <div className="settings__open-menu-wrapper">
        <button type="button" onClick={toggle}>
          <img
            src={dots}
            alt="open menu"
            className="settings__open-menu"
            ref={dotsRef}
          />
        </button>
      </div>
      <div className="settings__wrapper" ref={settingsRef} style={{ display }}>
        <div className="settings__delete">
          <img src={trash} alt="trash" className="settings__trash-icon" />
          <button type="button" onClick={() => setIsModalShown(true)}>
            <span className="settings__message">{deleteMessage}</span>
          </button>
        </div>
      </div>
      <ConfirmModal
        deleteAction={deleteAction}
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
      />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Settings);
