import React from 'react';
import { Field } from 'redux-form';

import './Form.scss';
import Headline from '../Headline';

class Form extends React.Component {
  renderMessage(message) {
    if (!message) {
      return null;
    }

    return <div className="form__input-message">{message}</div>;
  }

  renderError({ error, touched, active }) {
    if (touched && !active && error) {
      return (
        <div className="form__input-error-message">
          <i className="fas fa-exclamation-circle"></i> {error}
        </div>
      );
    }

    return null;
  }

  renderInput = ({ input, type, placeholder, message, meta }) => {
    const className =
      meta.error && meta.touched && !meta.active
        ? 'form__input form__input--error'
        : 'form__input';

    return (
      <div>
        <input
          className={className}
          placeholder={placeholder}
          {...input}
          type={type}
        />
        {this.renderMessage(message)}
        {this.renderError(meta)}
      </div>
    );
  };

  renderFields() {
    return this.props.fields.map(({ name, placeholder, type, message }, i) => {
      return (
        <Field
          key={i}
          name={name}
          placeholder={placeholder}
          message={message}
          type={type}
          component={this.renderInput}
        />
      );
    });
  }

  render() {
    const renderedFields = this.renderFields();

    return (
      <div className="form">
        <Headline header="sign up" subHeader="create your devConnector account." />
        <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
          {renderedFields}
          <button className="form__button">submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
