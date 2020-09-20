import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import code from '../../../../assets/images/code-logo.svg';
import arrow from '../../../../assets/icons/arrow.svg';
import validate from './validate';
import AuthInput from '../../../common/form/AuthInput';
import Spinner from '../../../common/Spinner';

const UserName = ({ handleSubmit, previousFormPage, email, loading }) => (
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
    <h1 className="auth__title">what&apos;s your name?</h1>
    <h2 className="auth__sub-title">
      we need just a little more info to set up your account
    </h2>
    <div className="auth__inputs-wrapper">
      <Field
        name="firstname"
        type="text"
        placeholder="First name"
        component={AuthInput}
      />
      <Field
        name="surname"
        type="text"
        placeholder="Surname"
        component={AuthInput}
      />
    </div>
    <div className="auth__button-wrapper auth__button-wrapper--with-spinner">
      {loading ? <Spinner noMessage /> : null}
      <button
        type="submit"
        className="auth__button auth__button--scale-on-active"
      >
        sign in
      </button>
    </div>
  </form>
);

const wrappedForm = reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(UserName);

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps)(wrappedForm);
