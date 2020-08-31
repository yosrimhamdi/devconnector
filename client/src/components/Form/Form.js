import React from 'react';
import { Field } from 'redux-form';
import classnames from 'classnames';

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
          <i className="fas fa-exclamation-circle" /> {error}
        </div>
      );
    }

    return null;
  }

  renderInput = ({ input, type, placeholder, message, meta }) => {
    const className = classnames('form__input', {
      'form__input--error': meta.error && meta.touched && !meta.active,
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
        {this.renderError(meta)}
      </div>
    );
  };

  renderFields() {
    return this.props.fields.map(({ name, placeholder, type, message }, i) => (
      <Field
        key={i}
        name={name}
        placeholder={placeholder}
        message={message}
        type={type}
        component={this.renderInput}
      />
    ));
  }

  render() {
    const renderedFields = this.renderFields();

    return (
      <div className="form">
        <Headline header={this.props.header} subHeader={this.props.subHeader} />
        <form noValidate onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
          {renderedFields}
          <button className="form__button" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
