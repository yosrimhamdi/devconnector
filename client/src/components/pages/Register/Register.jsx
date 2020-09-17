import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import './Register.scss';
import validate from './validate';
import { Input } from '../../common/form';
import Headline from '../../common/Headline';
import { registerUser } from '../../../redux/actions';

const Register = ({ handleSubmit, registerUser, errors }) => (
  <div className="register">
    <div className="register__content">
      <Headline header="sign up" subHeader="create your DevConnector account" />
      <form onSubmit={handleSubmit(registerUser)} className="form">
        <Field name="name" placeholder="name" component={Input} />
        <Field
          name="email"
          placeholder="email"
          component={Input}
          responseError={errors.emailExists}
        />
        <Field
          name="password"
          type="password"
          placeholder="password"
          component={Input}
        />
        <Field
          name="passwordConfirm"
          type="password"
          placeholder="confirm password"
          component={Input}
        />
        <button className="form__submit-btn" type="submit">
          submit
        </button>
      </form>
    </div>
  </div>
);

const wrappedForm = reduxForm({ form: 'register', validate })(Register);

const mapStateToProps = ({ auth, errors }) => ({ auth, errors });

export default connect(mapStateToProps, { registerUser })(wrappedForm);
