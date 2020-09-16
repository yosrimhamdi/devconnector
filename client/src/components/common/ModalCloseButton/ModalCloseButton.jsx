import React from 'react';

import close from './close.svg';

const ModalCloseButton = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    <img src={close} alt="close" className="modal__close-icon" />
  </button>
);

export default ModalCloseButton;
