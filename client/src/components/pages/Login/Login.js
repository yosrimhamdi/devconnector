import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import { loginUser } from '../../../redux/actions';
import history from '../../../history';
import Headline from '../../Headline';

import Input from '../../form/Input';

class Login extends React.Component {
  UNSAFE_componentWillMount() {
    if (this.props.auth.isAuthenticated) {
      history.push('/dashboard');
    }
  }

  onFormSubmit = formValues => {
    this.props.loginUser(formValues);
  };

  render() {
    const { errors } = this.props;

    return (
      <div>
        <Headline
          header="Log In"
          subHeader="Sign in to your DevConnector account."
        />
        <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="form">
          <Field
            name="email"
            type="text"
            placeholder="email"
            component={Input}
            error={errors.wrongEmailOrPassword}
          />
          <Field
            name="password"
            type="password"
            placeholder="password"
            component={Input}
            error={errors.wrongEmailOrPassword}
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

const mapStateToProps = ({ auth, errors }) => ({ auth, errors });

export default connect(mapStateToProps, { loginUser })(wrappedForm);
