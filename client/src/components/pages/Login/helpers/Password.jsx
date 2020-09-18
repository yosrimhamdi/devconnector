import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import code from '../../../../assets/images/code-logo.svg';
import arrow from './arrow.svg';
import validate from '../validate';
import Input from './Input';

const Password = ({ handleSubmit, previousPage, email }) => {
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
      <Field
        name="password"
        type="password"
        placeholder="password"
        component={Input}
      />
      <div className="login__submit-button-wrapper">
        <button type="submit" className="login__submit-button">
          sign in
        </button>
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

const mapStateToProps = state => ({
  email: state.form.login.values.email,
});

export default connect(mapStateToProps)(wrappedForm);
