import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import './Slider.scss';

const Slider = ({ auth, isSliderVisible, setIsSliderVisible }) => {
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
      <NavLink to="/signup" activeClassName="slider__link--active">
        sign up
      </NavLink>
      <NavLink
        to="/login"
        className="slider__link"
        activeClassName="slider__link--active"
      >
        login
      </NavLink>
    </>
  );

  if (auth.isAuthenticated) {
    slideNavLinks = (
      <>
        <NavLink
          to="/posts"
          className="slider__link"
          activeClassName="slider__link--active"
        >
          posts feed
        </NavLink>
        <NavLink
          to="/profiles"
          className="slider__link"
          activeClassName="slider__link--active"
        >
          developers
        </NavLink>
        <NavLink
          to="/dashboard"
          className="slider__link"
          activeClassName="slider__link--active"
        >
          dashboard
        </NavLink>
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

export default connect(mapStateToProps)(Slider);
