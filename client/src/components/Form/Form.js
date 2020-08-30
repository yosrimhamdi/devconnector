import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './Form.scss';
import Headline from '../Headline';

class Form extends React.Component {
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
