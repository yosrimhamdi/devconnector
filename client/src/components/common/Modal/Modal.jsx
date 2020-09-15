import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

const Modal = ({ deleteAction, title, description, setIsModalShow }) => {
  const [isShown, setIsShow] = useState(true);

  const removeFromScreen = () => {
    setIsShow(false);
    setIsModalShow();
  };

  console.log(isShown);

  let modal = null;

  if (isShown) {
    modal = (
      <div className="modal" onClick={removeFromScreen}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
          <h1 className="modal__title">{title}</h1>
          <div className="modal__description">{description}</div>
          <div className="modal__actions">
            <button
              className="modal__cancel-button modal__button"
              type="button"
              onClick={removeFromScreen}
            >
              cancel
            </button>
            <button
              className="modal__confirm-button modal__button"
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

export default Modal;
