import React from 'react';
import { reduxForm } from 'redux-form';

import './CreateProfile.scss';

import Form from '../../Form';
import validate from './validate';
import fields from './fields';

class CreateProfile extends React.Component {
  onFormSubmit = formValues => {
    console.log(formValues);
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

export default reduxForm({ form: 'createProfile', validate })(CreateProfile);
