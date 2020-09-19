import React from 'react';
import { Field, reduxForm } from 'redux-form';

import code from '../../../../assets/images/code-logo.svg';
import arrow from '../../../../assets/icons/arrow.svg';
import validate from './validate';
import AuthInput from '../../../common/form/AuthInput';

const Password = ({ handleSubmit, previousFormPage, email }) => (
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
    <div className="auth__inputs-wrapper">
      <Field
        name="password"
        type="password"
        placeholder="password"
        component={AuthInput}
      />
    </div>
    <div className="auth__button-wrapper">
      <button type="submit" className="auth__button">
        sign in
      </button>
    </div>
  </form>
);

export default reduxForm({
  form: 'login',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Password);
