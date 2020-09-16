import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';

import './ConfirmModal.scss';
import ModalContext from '../../../contexts/ModalContext';

const ConfrimModal = ({ deleteAction, setIsModalShow }) => {
  const [isShown, setIsShow] = useState(true);

  const { title, description } = useContext(ModalContext);

  const removeFromScreen = () => {
    setIsShow(false);
    setIsModalShow();
  };

  let modal = null;

  if (isShown) {
    modal = (
      <div className="modal confirm-modal" onClick={removeFromScreen}>
        <div className=" modal__content" onClick={e => e.stopPropagation()}>
          <h1 className="confirm-modal__title">{title}</h1>
          <div className="confirm-modal__description">{description}</div>
          <div className="confirm-modal__actions">
            <button
              className="confirm-modal__cancel-button confirm-modal__button"
              type="button"
              onClick={removeFromScreen}
            >
              cancel
            </button>
            <button
              className="confirm-modal__confirm-button confirm-modal__button"
              type="button"
              onClick={deleteAction}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
};

export default ConfrimModal;
