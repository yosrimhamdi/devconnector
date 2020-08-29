import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left-section">
        <div className="header__devconnector">DevConnector</div>
        <div className="header__developer">Developers</div>
      </div>

      <div className="header__right-section">
        <div className="header__sign-up">Sign up</div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Header;
