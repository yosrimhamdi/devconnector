import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import code from '../../../../assets/images/code-logo.svg';
import arrow from './arrow.svg';
import validate from '../validate';
import Input from './Input';

const UserName = ({ handleSubmit, previousPage, email }) => (
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
    <h1 className="login__title">what&apos;s your name?</h1>
    <h2 className="login__sub-title">
      we need just a little more info to set up your account
    </h2>
    <div className="login__inputs-wrapper">
      <Field
        name="firstName"
        type="text"
        placeholder="first name"
        component={Input}
      />
      <Field
        name="surname"
        type="text"
        placeholder="surname"
        component={Input}
      />
    </div>
    <div className="login__submit-button-wrapper">
      <button type="submit" className="login__submit-button">
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

const mapStateToProps = state => ({
  email: state.form.signup.values.email,
});

export default connect(mapStateToProps)(wrappedForm);
