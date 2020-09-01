import React from 'react';
import classnames from 'classnames';

import './Form.scss';

class Form extends React.Component {
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

  renderResponseError(errorName) {
    const error = this.props.errors[errorName];

    if (!error) {
      return null;
    }

    return (
      <div className="form__input-error-message">
        <i className="fas fa-exclamation-circle" /> {error}
      </div>
    );
  }

  renderInput({ input, type, placeholder, message, errorName, meta }) {
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
        {this.renderValidationError(meta)}
        {this.renderResponseError(errorName)}
      </div>
    );
  }
}

export default Form;
