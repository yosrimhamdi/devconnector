import React from 'react';

import close from '../../../../assets/icons/close.svg';
import './ModalCloseButton.scss';

const ModalCloseButton = ({ onClick }) => (
  <div role="button" onClick={onClick} className="modal-close-button">
    <img src={close} alt="close" className="modal-close-button__close-icon" />
  </div>
);

export default ModalCloseButton;
