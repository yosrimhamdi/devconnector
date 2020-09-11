import React from 'react';
import { Link } from 'react-router-dom';

const ShowNavigation = (auth, logoutUser) => {
  const { isAuthenticated, user } = auth;

  if (isAuthenticated) {
    return (
      <>
        <Link to="/posts">post feed</Link>
        <Link to="/dashboard">dashboard</Link>
        <div className="header__logout">
          <img
            className="header__user-image"
            src={`/images/${user.photo}`}
            alt={`${user.name} avatar`}
          />
          <button onClick={logoutUser} type="button">
            logout
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Link to="/register" className="header__sign-up">
        sign up
      </Link>
      <Link to="/login">login</Link>
    </>
  );
};

export default ShowNavigation;
