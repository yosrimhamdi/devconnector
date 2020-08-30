import React from 'react';
import { reduxForm } from 'redux-form';

import Form from '../../Form';
import fields from './fields';
import validate from './validate';

class Register extends React.Component {
  onFormSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <Form
        fields={fields}
        onFormSubmit={this.onFormSubmit}
        handleSubmit={this.props.handleSubmit}
      />
    );
  }
}

export default reduxForm({ form: 'register', validate })(Register);
