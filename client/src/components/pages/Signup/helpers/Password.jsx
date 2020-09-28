import React from 'react';
import { Field, reduxForm } from 'redux-form';

import code from '../../../../assets/images/code-logo.svg';
import arrow from '../../../../assets/icons/arrow.svg';
import validate from './validate';
import Input from '../../../common/form/microsoft/Input';
import Button from '../../../common/Button';
import {
  TogglePassword,
  useTogglePassword,
} from '../../../common/togglePassword';

const Password = ({ handleSubmit, previousFormPage, email }) => {
  const [type, togglePassword] = useTogglePassword();

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
      <TogglePassword togglePassword={togglePassword} />
      <div className="auth__button-wrapper">
        <Button text="next" />
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
