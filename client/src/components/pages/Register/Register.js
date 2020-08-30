import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './Register.scss';
import Headline from '../../Headline';

class Register extends React.Component {
  renderMessage(message) {
    if (!message) {
      return null;
    }

    return <div className="form__input-message">{message}</div>;
  }

  renderInput = ({ input, type, placeholder, message }) => {
    return (
      <div>
        <input
          className="form__input"
          placeholder={placeholder}
          {...input}
          type={type}
        />
        {this.renderMessage(message)}
      </div>
    );
  };

  onFormSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <div className="form">
        <Headline header="sign up" subHeader="create your devConnector account." />
        <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          <Field
            name="name"
            placeholder="name"
            type="text"
            component={this.renderInput}
          />
          <Field
            name="email"
            placeholder="email"
            type="email"
            message="This site uses Gravatar so if you want a profile image, use a Gravatar email"
            component={this.renderInput}
          />
          <Field
            name="password"
            placeholder="password"
            type="password"
            component={this.renderInput}
          />
          <Field
            name="passwordConfirm"
            placeholder="Confirm password"
            type="password"
            component={this.renderInput}
          />
          <button className="form__button">submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'form' })(Register);
