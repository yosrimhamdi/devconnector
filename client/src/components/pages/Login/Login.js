import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import classnames from 'classnames';

import './Login.scss';
import validate from './validate';
import Headline from '../../Headline';
import { loginUser } from '../../../redux/actions';

class Login extends React.Component {
  renderMessage(message) {
    if (!message) {
      return null;
    }

    return <div className="form__input-message">{message}</div>;
  }

  renderValidationError({ error, touched, active }) {
    if (!(touched && !active && error)) {
      return null;
    }

    return (
      <div className="form__input-error-message">
        <i className="fas fa-exclamation-circle" /> {error}
      </div>
    );
  }

  renderResponseError(error) {
    if (!error) {
      return null;
    }

    return (
      <div className="form__input-error-message">
        <i className="fas fa-exclamation-circle" /> {error}
      </div>
    );
  }

  renderInput = ({ input, type, placeholder, message, errorName, meta }) => {
    const error = this.props.errors[errorName];

    const className = classnames('form__input', {
      'form__input--error': error || (meta.error && meta.touched && !meta.active),
    });

    return (
      <div>
        <input
          className={className}
          placeholder={placeholder}
          {...input}
          type={type}
        />
        {this.renderMessage(message)}
        {this.renderValidationError(meta)}
        {this.renderResponseError(error)}
      </div>
    );
  };
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
            name="email"
            placeholder="email"
            type="email"
            component={this.renderInput}
          />
          {this.props.errors['wrongemailorpassword']}
          <Field
            name="password"
            placeholder="password"
            type="password"
            component={this.renderInput}
            errorName="wrongemailorpassword"
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

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps, { loginUser })(wrappedForm);
