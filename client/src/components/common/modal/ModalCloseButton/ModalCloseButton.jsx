import React from 'react';

import close from './close.svg';
import './ModalCloseButton.scss';

const ModalCloseButton = ({ onClick }) => (
  <div role="button" onClick={onClick}>
    <img src={close} alt="close" className="modal-close-button" />
  </div>
);

export default ModalCloseButton;
