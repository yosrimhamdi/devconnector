import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import { loginUser } from '../../../redux/actions';
import Headline from '../../common/Headline';

import { Input } from '../../common/form';

class Login extends React.Component {
  onFormSubmit = formValues => {
    this.props.loginUser(formValues);
  };

  render() {
    const { errors } = this.props;

    return (
      <div>
        <Headline
          header="log in"
          subHeader="sign in to your DevConnector account."
        />
        <form
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
          className="form"
        >
          <Field
            name="email"
            placeholder="email"
            component={Input}
            responseError={errors.wrongEmailOrPassword}
          />
          <Field
            name="password"
            type="password"
            placeholder="password"
            component={Input}
            responseError={errors.wrongEmailOrPassword}
          />
          <button className="form__submit-btn" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

const wrappedForm = reduxForm({ form: 'login', validate })(Login);

const mapStateToProps = ({ auth, errors }) => ({ auth, errors });

export default connect(mapStateToProps, { loginUser })(wrappedForm);
