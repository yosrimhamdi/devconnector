import React from 'react';
import { Field, reduxForm } from 'redux-form';

import code from '../../../../assets/images/code-logo.svg';
import AuthInput from '../../../common/form/AuthInput';
import validate from '../validate';

const Email = ({ handleSubmit }) => (
  <form noValidate onSubmit={handleSubmit}>
    <img className="auth__website-logo" src={code} alt="webiste logo" />
    <h1 className="auth__title">create account</h1>
    <div className="auth__inputs-wrapper">
      <Field
        name="email"
        component={AuthInput}
        placeholder="someone@exemple.com"
        type="email"
      />
    </div>
    <div className="auth__button-wrapper">
      <button type="submit" className="auth__button">
        next
      </button>
    </div>
  </form>
);
export default reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Email);
