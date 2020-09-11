import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from '../../common/ProfileForm/validate';
import { createProfile } from '../../../redux/actions';

import ProfileForm from '../../common/ProfileForm/ProfileForm';

const CreateProfile = ({ handleSubmit, createProfile }) => (
  <ProfileForm
    handleSubmit={handleSubmit}
    onFormSubmit={createProfile}
    header="create your profile"
    subHeader="let`s get some information to make your profile stand out."
  />
);

const wrappedForm = reduxForm({ form: 'createProfile', validate })(
  CreateProfile,
);

export default connect(null, { createProfile })(wrappedForm);
