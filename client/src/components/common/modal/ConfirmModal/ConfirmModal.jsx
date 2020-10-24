import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';

import './ConfirmModal.scss';
import ModalContext from '../../../../contexts/ModalContext';
import ModalCloseButton from '../ModalCloseButton';
import Spinner from '../../Spinner';

const ConfrimModal = ({ isModalShown, setIsModalShown }) => {
  const [confirmed, setConfirmed] = useState(false);

  const { title, description, action } = useContext(ModalContext);

  if (isModalShown) {
    document.body.classList.add('confirm-modal--disable-scroll');
  } else {
    document.body.classList.remove('confirm-modal--disable-scroll');
    return null;
  }

  const removeModalFromScreen = () => {
    if (!confirmed) {
      setIsModalShown(false);
    }
  };

  const modal = (
    <div
      className="confirm-modal"
      role="button"
      onClick={removeModalFromScreen}
    >
      <div
        className="confirm-modal__content"
        role="button"
        onClick={e => e.stopPropagation()}
      >
        <div className="confirm-modal__header">
          <h1 className="confirm-modal__title">{title}</h1>
          <ModalCloseButton onClick={removeModalFromScreen} />
        </div>
        <div className="confirm-modal__description">{description}</div>
        <div className="confirm-modal__actions">
          <button
            className="confirm-modal__cancel-button"
            type="button"
            onClick={removeModalFromScreen}
          >
            cancel
          </button>
          <button
            className="confirm-modal__confirm-button"
            type="button"
            onClick={() => {
              setConfirmed(true);

              action();
            }}
          >
            delete
          </button>
        </div>
        <Spinner removed={!confirmed} overlay />
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
};

export default ConfrimModal;
