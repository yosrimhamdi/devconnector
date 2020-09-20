import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import code from '../../../../assets/images/code-logo.svg';
import arrow from '../../../../assets/icons/arrow.svg';
import validate from './validate';
import AuthInput from '../../../common/form/AuthInput';
import Spinner from '../../../common/Spinner';

const Password = ({
  handleSubmit,
  previousFormPage,
  email,
  errors,
  loading,
}) => (
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
        placeholder="Password"
        responseError={errors.wrongEmailOrPassword}
        component={AuthInput}
      />
    </div>
    <div className="auth__button-wrapper auth__button-wrapper--with-spinner">
      {loading ? <Spinner noMessage /> : null}
      <button type="submit" className="auth__button">
        sign in
      </button>
    </div>
  </form>
);

const wrappedForm = reduxForm({
  form: 'login',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Password);

const mapStateToProps = ({ errors, loading }) => ({ errors, loading });

export default connect(mapStateToProps)(wrappedForm);
