import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from '../../common/ProfileForm/validate';
import ProfileForm from '../../common/ProfileForm';
import updateProfile from '../../../redux/actions/profiles/updateProfile';

const UpdateProfile = ({ handleSubmit, initialValues, updateProfile }) => (
  <ProfileForm
    handleSubmit={handleSubmit}
    onFormSubmit={updateProfile}
    initialValues={initialValues}
    title="update profile"
  />
);

const wrappedForm = reduxForm({ form: 'updateProfile', validate })(
  UpdateProfile,
);

const mapStateToProps = ({ auth }) => {
  let profile = { ...auth.profile };

  profile = {
    ...profile,
    ...profile.social,
    skills: profile.skills.join(','),
  };

  return {
    initialValues: profile,
  };
};

export default connect(mapStateToProps, { updateProfile })(wrappedForm);
