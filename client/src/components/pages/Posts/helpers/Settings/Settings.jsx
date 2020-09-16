import React, { useState } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import './Settings.scss';
import trash from '../../icons/trash.svg';
import dots from '../../icons/dots.svg';
import ConfirmModal from '../../../../common/modal/ConfirmModal';
import useHideOnBlur from './useHideOnBlur';

const Settings = ({ relatedUser, auth, deleteMessage }) => {
  const [isSettingsShow, setIsSettingShown] = useState(false);

  const [isModalShown, setIsModalShown] = useState(false);

  const [dotsRef, settingsRef] = useHideOnBlur(setIsSettingShown);

  if (relatedUser._id !== auth.user._id) {
    return null;
  }

  const toggleSettingsVisiblity = () => setIsSettingShown(!isSettingsShow);

  const settingsClassName = classnames('settings__wrapper', {
    'settings__wrapper--visible': isSettingsShow,
  });

  return (
    <div className="settings">
      <div
        className="settings__open-menu-icon-wrapper"
        role="button"
        onClick={toggleSettingsVisiblity}
      >
        <img
          src={dots}
          alt="open menu"
          className="settings__open-menu-icon"
          ref={dotsRef}
        />
      </div>
      <div className={settingsClassName} ref={settingsRef}>
        <div
          className="settings__delete"
          role="button"
          onClick={() => setIsModalShown(true)}
        >
          <img src={trash} alt="trash" className="settings__trash-icon" />
          <span className="settings__message">{deleteMessage}</span>
        </div>
      </div>
      <ConfirmModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
      />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Settings);
