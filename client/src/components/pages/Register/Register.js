import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Form from '../../Form';
import fields from './fields';
import validate from './validate';
import { registerUser } from '../../../redux/actions';
import history from '../../../history';

class Register extends React.Component {
  UNSAFE_componentWillMount() {
    if (this.props.auth.isAuthenticated) {
      history.push('/dashboard');
    }
  }

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

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { registerUser })(wrappedForm);
