import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import code from '../../../../assets/images/code-logo.svg';
import AuthInput from '../../../common/form/AuthInput';
import validate from '../validate';

const Email = ({ handleSubmit }) => (
  <form noValidate onSubmit={handleSubmit}>
    <img className="auth__website-logo" src={code} alt="webiste logo" />
    <h1 className="auth__title">log in</h1>
    <div className="auth__inputs-wrapper">
      <Field
        name="email"
        component={AuthInput}
        placeholder="email"
        type="email"
      />
    </div>
    <div className="auth__message">
      <span>No accout?</span>
      <Link to="/register" className="auth__link">
        Create one!
      </Link>
    </div>
    <div className="auth__button-wrapper">
      <button type="submit" className="auth__button">
        next
      </button>
    </div>
  </form>
);
export default reduxForm({
  form: 'login',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Email);
