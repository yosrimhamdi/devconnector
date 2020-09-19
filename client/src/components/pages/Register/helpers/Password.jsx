import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import code from '../../../../assets/images/code-logo.svg';
import arrow from './arrow.svg';
import validate from '../validate';
import Input from './Input';

const Password = ({ handleSubmit, previousPage, email }) => {
  const [type, setType] = useState('password');

  const togglePasswordVisislity = () =>
    type === 'password' ? setType('text') : setType('password');

  return (
    <form noValidate onSubmit={handleSubmit}>
      <img className="login__website-logo" src={code} alt="code logo" />
      <div className="login__back-arrow-icon-wrapper">
        <img
          onClick={previousPage}
          className="login__back-arrow-icon"
          src={arrow}
          alt="back arrow"
        />
        <div className="login__user-email">{email}</div>
      </div>
      <h1 className="login__title">enter password</h1>
      <h2 className="login__sub-title">
        enter the password you would like to use with your account
      </h2>
      <div className="login__inputs-wrapper">
        <Field
          name="password"
          type={type}
          placeholder="Create password"
          component={Input}
        />
      </div>
      <label className="login__label" htmlFor="password-visibility-input">
        <input
          type="checkbox"
          id="password-visibility-input"
          onClick={togglePasswordVisislity}
        />
        <span className="login__label-message">show password</span>
      </label>
      <div className="login__submit-button-wrapper">
        <button type="submit" className="login__submit-button">
          sign in
        </button>
      </div>
    </form>
  );
};
const wrappedForm = reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Password);

const mapStateToProps = state => ({
  email: state.form.signup.values.email,
});

export default connect(mapStateToProps)(wrappedForm);
