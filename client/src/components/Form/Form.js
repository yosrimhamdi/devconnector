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

  renderSelect({ input, name, message, meta }) {
    const className = classnames('form__input', {
      'form__input--error': meta.error && meta.touched && !meta.active,
    });

    return (
      <div>
        <select {...input} name={name} className={className}>
          <option value="* select professional status">
            * select professional status
          </option>
          <option value="developer">developer</option>
          <option value="junior developer">junior developer</option>
          <option value="senior developer">senior developer</option>
          <option value="manager">manager</option>
          <option value="student">student</option>
          <option value="instructor">instructor</option>
          <option value="intern">intern</option>
          <option value="other">intern</option>
        </select>
        {this.renderMessage(message)}
        {this.renderValidationError(meta)}
      </div>
    );
  }

  getComponent(type) {
    switch (type) {
      case 'select':
        return this.renderSelect.bind(this);
      default:
        return this.renderInput.bind(this);
    }
  }

  renderFields() {
    return this.props.fields.map(
      ({ name, placeholder, type, message, errorName }, i) => {
        const component = this.getComponent(type);

        return (
          <Field
            key={i}
            name={name}
            errorName={errorName}
            placeholder={placeholder}
            message={message}
            type={type}
            component={component}
          />
        );
      },
    );
  }

  render() {
    const renderedFields = this.renderFields();

    return (
      <div className="form">
        <Headline header={this.props.header} subHeader={this.props.subHeader} />
        {this.props.children}
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
