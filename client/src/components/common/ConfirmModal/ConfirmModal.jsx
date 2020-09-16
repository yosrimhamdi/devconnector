import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import './ConfirmModal.scss';
import ModalContext from '../../../contexts/ModalContext';

const ConfrimModal = ({ isModalShown, setIsModalShown }) => {
  const { title, description, action } = useContext(ModalContext);

  if (!isModalShown) {
    return null;
  }

  const removeModalFromScreen = () => setIsModalShown(false);

  const modal = (
    <div className="modal confirm-modal" onClick={removeModalFromScreen}>
      <div className=" modal__content" onClick={e => e.stopPropagation()}>
        <h1 className="confirm-modal__title">{title}</h1>
        <div className="confirm-modal__description">{description}</div>
        <div className="confirm-modal__actions">
          <button
            className="confirm-modal__cancel-button confirm-modal__button"
            type="button"
            onClick={removeModalFromScreen}
          >
            cancel
          </button>
          <button
            className="confirm-modal__confirm-button confirm-modal__button"
            type="button"
            onClick={action}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
};

export default ConfrimModal;
