import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import { loginUser } from '../../../redux/actions';
import Headline from '../../common/Headline';

import { Input } from '../../common/form';

const Login = ({ handleSubmit, loginUser, errors }) => (
  <div>
    <Headline
      header="log in"
      subHeader="sign in to your DevConnector account."
    />
    <form onSubmit={handleSubmit(loginUser)} className="form">
      <Field
        name="email"
        placeholder="email"
        component={Input}
        responseError={errors.wrongEmailOrPassword}
      />
      <Field
        name="password"
        type="password"
        placeholder="password"
        component={Input}
        responseError={errors.wrongEmailOrPassword}
      />
      <button className="form__submit-btn" type="submit">
        submit
      </button>
    </form>
  </div>
);

const wrappedForm = reduxForm({ form: 'login', validate })(Login);

const mapStateToProps = ({ auth, errors }) => ({
  auth,
  errors,
});

export default connect(mapStateToProps, { loginUser })(wrappedForm);
