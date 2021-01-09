import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import code from '../../../../assets/images/code-logo.svg';
import Input from '../../../common/form/microsoft/Input';
import validate from './validate';
import clearErrors from '../../../../redux/actions/clearErorrs';
import checkUserExistence from '../../../../redux/actions/users/checkUserExistence';
import Spinner from '../../../common/Spinner';
import Button from '../../../common/Button';

const Email = ({
  handleSubmit,
  nextPage,
  checkUserExistence,
  errors,
  loading,
  clearErrors,
}) => {
  const onSubmit = formValues => {
    checkUserExistence(formValues, nextPage);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <img className="auth__website-logo" src={code} alt="webiste logo" />
      <h1 className="auth__title">create account</h1>
      <div className="auth__inputs-wrapper">
        <Field
          name="email"
          component={Input}
          placeholder="Someone@exemple.com"
          type="email"
          responseError={errors.alreadyRegisterd}
          onFocus={clearErrors}
        />
      </div>
      <div className="auth__message">
        <span>Already a user?</span>
        <Link to="/login" className="auth__link">
          Log in!
        </Link>
      </div>
      <div className="auth__button-wrapper auth__button-wrapper--with-spinner">
        <Button text="next" />
      </div>
      <Spinner visible={loading} onContent />
    </form>
  );
};
const wrappedForm = reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Email);

const mapStateToProps = ({ errors, loading }) => ({ errors, loading });

export default connect(mapStateToProps, { checkUserExistence, clearErrors })(
  wrappedForm,
);
