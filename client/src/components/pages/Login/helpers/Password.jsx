import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import code from '../../../../assets/images/code-logo.svg';
import arrow from '../../../../assets/icons/arrow.svg';
import validate from './validate';
import Input from '../../../common/form/microsoft/Input';
import Spinner from '../../../common/Spinner';
import { clearErrors } from '../../../../redux/actions';
import Button from '../../../common/Button';
import {
  TogglePassword,
  useTogglePassword,
} from '../../../common/togglePassword';

const Password = ({
  handleSubmit,
  previousFormPage,
  email,
  errors,
  loading,
  clearErrors,
}) => {
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
      <div className="auth__inputs-wrapper">
        <Field
          name="password"
          type={type}
          placeholder="Password"
          responseError={errors.wrongEmailOrPassword}
          component={Input}
          onFocus={clearErrors}
        />
      </div>
      <TogglePassword togglePassword={togglePassword} />
      <div className="auth__button-wrapper auth__button-wrapper--with-spinner">
        <Spinner hidden={!loading} />
        <Button text="sign in" />
      </div>
    </form>
  );
};

const wrappedForm = reduxForm({
  form: 'login',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Password);

const mapStateToProps = ({ errors, loading }) => ({ errors, loading });

export default connect(mapStateToProps, { clearErrors })(wrappedForm);
