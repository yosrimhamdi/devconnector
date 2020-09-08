import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import { Input } from '../../common/form';
import Headline from '../../common/Headline';
import { registerUser } from '../../../redux/actions';

class Register extends React.Component {
  onFormSubmit = formValues => {
    this.props.registerUser(formValues);
  };

  render() {
    const { errors } = this.props;

    return (
      <div>
        <Headline
          header="sign up"
          subHeader="create your DevConnector account."
        />
        <form
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
          className="form"
        >
          <Field name="name" placeholder="name" component={Input} />
          <Field
            name="email"
            placeholder="email"
            component={Input}
            responseError={errors.emailExists}
          />
          <Field
            name="password"
            type="password"
            placeholder="password"
            component={Input}
          />
          <Field
            name="passwordConfirm"
            type="password"
            placeholder="confirm password"
            component={Input}
          />
          <button className="form__submit-btn" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

const wrappedForm = reduxForm({ form: 'register', validate })(Register);

const mapStateToProps = ({ auth, errors }) => ({ auth, errors });

export default connect(mapStateToProps, { registerUser })(wrappedForm);
