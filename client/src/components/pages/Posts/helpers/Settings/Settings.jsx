import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Settings.scss';

import trash from '../../icons/trash.svg';
import dots from '../../icons/dots.svg';
import useToggle from '../../../../../hooks/useToggle';
import Modal from '../../../../common/Modal';

const Settings = ({ post, auth, deleteAction, deleteMessage }) => {
  const [display, toggle] = useToggle();
  const [isModalShown, setIsModalShow] = useState(false);

  const showModal = () => setIsModalShow(true);

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
          <button type="button" onClick={showModal}>
            <span className="settings__message">{deleteMessage}</span>
          </button>
        </div>
      </div>
      {isModalShown ? (
        <Modal
          deleteAction={deleteAction}
          title="delete post?"
          description="are you sure you want to delete this post?"
          setIsModalShow={setIsModalShow}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Settings);
