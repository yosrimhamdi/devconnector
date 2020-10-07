import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import './Slider.scss';
import { logoutUser } from '../../../../../redux/actions';

const Slider = ({ auth, logoutUser, isSliderVisible, setIsSliderVisible }) => {
  const sliderNavRef = useRef(null);

  useEffect(() => {
    const onDocClick = ({ target }) => {
      if (
        target !== sliderNavRef.current &&
        !target.classList.contains('hamburger-menu__line')
      ) {
        setIsSliderVisible(false);
      }
    };

    document.addEventListener('click', onDocClick);

    return () => document.removeEventListener('click', onDocClick);
  }, [setIsSliderVisible]);

  const slideNavClass = classnames('slider', {
    'slider--visible': isSliderVisible,
  });

  let slideNavLinks = (
    <>
      <NavLink to="/profiles" activeClassName="slider__active-link">
        developers
      </NavLink>
      <NavLink to="/login" activeClassName="slider__active-link">
        login
      </NavLink>
      <NavLink to="/signup" activeClassName="slider__active-link">
        sign up
      </NavLink>
    </>
  );

  if (auth.isAuthenticated) {
    slideNavLinks = (
      <>
        <NavLink to="/dashboard" activeClassName="slider__active-link">
          dashboard
        </NavLink>
        <NavLink to="/posts" activeClassName="slider__active-link">
          posts feed
        </NavLink>
        <NavLink to="/profiles" activeClassName="slider__active-link">
          developers
        </NavLink>
        <div className="slider__logout" role="button" onClick={logoutUser}>
          logout
        </div>
      </>
    );
  }

  return (
    <div className={slideNavClass} ref={sliderNavRef}>
      <div role="button" onClick={() => setIsSliderVisible(false)}>
        {slideNavLinks}
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logoutUser })(Slider);
