import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import './Login.scss';
import Form from '../../Form';
import fields from './fields';
import validate from './validate';
import { login } from '../../../redux/actions';

class Login extends React.Component {
  onFormSubmit = formValues => {
    this.props.login(formValues);
  };

  render() {
    return (
      <Form
        fields={fields}
        onFormSubmit={this.onFormSubmit}
        handleSubmit={this.props.handleSubmit}
        header="Log In
        "
        subHeader="Sign in to your DevConnector account."
      />
    );
  }
}

const wrappedForm = reduxForm({ form: 'login', validate })(Login);

export default connect(null, { login })(wrappedForm);
