import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import './CreateProfile.scss';

import Form from '../../Form';
import validate from './validate';
import fields from './fields';
import { createProfile } from '../../../redux/actions';

class CreateProfile extends React.Component {
  onFormSubmit = formValues => {
    this.props.createProfile(formValues);
  };

  render() {
    return (
      <div className="create-profile">
        <Form
          header="create your profile"
          subHeader="let's get some information to make your profile stand out."
          fields={fields}
          handleSubmit={this.props.handleSubmit}
          onFormSubmit={this.onFormSubmit}
        >
          <h3 className="create-profile__require-message">* = required field</h3>
        </Form>
      </div>
    );
  }
}

const wrappedForm = reduxForm({ form: 'createProfile', validate })(CreateProfile);

export default connect(null, { createProfile })(wrappedForm);
