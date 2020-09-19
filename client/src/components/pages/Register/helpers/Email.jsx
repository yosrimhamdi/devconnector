import React from 'react';
import { Field, reduxForm } from 'redux-form';

import code from '../../../../assets/images/code-logo.svg';
import Input from './Input';
import validate from '../validate';

const Email = ({ handleSubmit }) => {
  return (
    <form noValidate onSubmit={handleSubmit}>
      <img className="login__website-logo" src={code} alt="webiste logo" />
      <h1 className="login__title">create account</h1>
      <div className="login__inputs-wrapper">
        <Field
          name="email"
          component={Input}
          placeholder="someone@exemple.com"
          type="email"
        />
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
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Email);
