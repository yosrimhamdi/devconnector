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
    title="create profile"
  />
);

const wrappedForm = reduxForm({ form: 'createProfile', validate })(
  CreateProfile,
);

export default connect(null, { createProfile })(wrappedForm);
