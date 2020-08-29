import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      Copyright &copy; {new Date().getFullYear()} Dev Connector
    </div>
  );
};

export default Footer;
