import React from 'react';
import classnames from 'classnames';
import { Field } from 'redux-form';
import { connect } from 'react-redux';

import './Form.scss';
import Headline from '../Headline';

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

  renderInput({ input, type, placeholder, message, errorName, meta }) {
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
  }

  renderFields() {
    return this.props.fields.map(
      ({ name, placeholder, type, message, errorName }, i) => (
        <Field
          key={i}
          name={name}
          errorName={errorName}
          placeholder={placeholder}
          message={message}
          type={type}
          component={this.renderInput.bind(this)}
        />
      ),
    );
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

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps)(Form);
