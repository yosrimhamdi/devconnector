import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import code from '../../../../assets/images/code-logo.svg';
import Input from './Input';
import validate from '../validate';

const Email = ({ handleSubmit }) => {
  return (
    <form noValidate onSubmit={handleSubmit}>
      <img className="login__website-logo" src={code} alt="webiste logo" />
      <h1 className="login__title">sign in</h1>
      <Field name="email" component={Input} placeholder="email" type="email" />
      <div className="login__message">
        <span>No accout?</span>
        <Link to="/register" className="login__link">
          Create one!
        </Link>
      </div>
      <div className="login__submit-button-wrapper">
        <button type="submit" className="login__submit-button">
          next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'login',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Email);
