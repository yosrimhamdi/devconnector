import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';

import code from '../../../../assets/images/code-logo.svg';
import arrow from '../../../../assets/icons/arrow.svg';
import validate from './validate';
import Input from '../../../common/form/microsoft/Input';
import Button from '../../../common/Button';

const Password = ({ handleSubmit, previousFormPage, email }) => {
  const [type, setType] = useState('password');

  const togglePassword = () =>
    type === 'password' ? setType('text') : setType('password');

  return (
    <form noValidate onSubmit={handleSubmit}>
      <img className="auth__website-logo" src={code} alt="code logo" />
      <div className="auth__back-arrow-icon-wrapper">
        <img
          onClick={previousFormPage}
          className="auth__back-arrow-icon"
          src={arrow}
          alt="back arrow"
        />
        <div className="auth__user-email">{email}</div>
      </div>
      <h1 className="auth__title">enter password</h1>
      <h2 className="auth__sub-title">
        enter the password you would like to use with your account
      </h2>
      <div className="auth__inputs-wrapper">
        <Field
          name="password"
          type={type}
          placeholder="Create password"
          component={Input}
        />
      </div>
      <label className="auth__label" htmlFor="password-visibility-input">
        <input
          type="checkbox"
          id="password-visibility-input"
          onClick={togglePassword}
        />
        <span className="auth__label-message">show password</span>
      </label>
      <div className="auth__button-wrapper">
        <Button text="next" long />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Password);
