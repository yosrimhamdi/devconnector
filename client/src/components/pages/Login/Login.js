import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import './Login.scss';
import fields from './fields';
import Form from '../../Form';
import validate from './validate';
import { loginUser } from '../../../redux/actions';
import history from '../../../history';

class Login extends React.Component {
  onFormSubmit = formValues => {
    this.props.loginUser(formValues);
  };

  render() {
    if (this.props.auth.isAuthenticated) {
      history.push('/dashboard');
    }

    return (
      <Form
        fields={fields}
        onFormSubmit={this.onFormSubmit}
        handleSubmit={this.props.handleSubmit}
        header="Log In"
        subHeader="Sign in to your DevConnector account."
      />
    );
  }
}

const wrappedForm = reduxForm({ form: 'login', validate })(Login);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { loginUser })(wrappedForm);
