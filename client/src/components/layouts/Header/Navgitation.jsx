import React from 'react';
import { Link } from 'react-router-dom';

const ShowNavigation = ({ auth: { isAuthenticated, user }, logoutUser }) => {
  if (isAuthenticated) {
    return (
      <>
        <Link to="/posts" className="header__link">
          post feed
        </Link>
        <Link to="/dashboard" className="header__link">
          dashboard
        </Link>
        <div className="header__logout">
          <img
            className="header__user-image"
            src={`/images/${user.photo}`}
            alt={`${user.name} avatar`}
          />
          <div
            className="header__logout-button"
            onClick={logoutUser}
            role="button"
          >
            logout
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Link to="/register" className="header__sign-up header__link">
        sign up
      </Link>
      <Link to="/login" className="header__link">
        login
      </Link>
    </>
  );
};

export default ShowNavigation;
