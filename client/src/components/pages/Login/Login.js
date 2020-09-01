import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import './Login.scss';
import Form from '../../Form';
import validate from './validate';
import Headline from '../../Headline';
import { loginUser } from '../../../redux/actions';

class Login extends Form {
  onFormSubmit = formValues => {
    this.props.loginUser(formValues);
  };

  render() {
    return (
      <div className="form">
        <Headline
          header="Log In"
          subHeader="Sign in to your DevConnector account."
        />
        <form noValidate onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          <Field
            name="name"
            placeholder="name"
            type="text"
            component={this.renderInput}
          />
          <Field
            name="password"
            placeholder="password"
            type="password"
            component={this.renderInput}
          />
          <button className="form__button" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

const wrappedForm = reduxForm({ form: 'login', validate })(Login);

export default connect(null, { loginUser })(wrappedForm);
