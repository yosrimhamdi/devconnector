import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Form from '../../Form';
import fields from './fields';
import validate from './validate';
import { registerUser } from '../../../redux/actions';

class Register extends React.Component {
  onFormSubmit = formValues => {
    this.props.registerUser(formValues);
  };

  render() {
    return (
      <Form
        fields={fields}
        onFormSubmit={this.onFormSubmit}
        handleSubmit={this.props.handleSubmit}
        header="sign up"
        subHeader="create your devConnector account."
      />
    );
  }
}

const wrappedForm = reduxForm({ form: 'register', validate })(Register);

export default connect(null, { registerUser })(wrappedForm);
