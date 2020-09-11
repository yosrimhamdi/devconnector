import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from '../../common/ProfileForm/validate';
import ProfileForm from '../../common/ProfileForm/';
import { updateProfile } from '../../../redux/actions';

const UpdateProfile = props => (
  <ProfileForm
    handleSubmit={props.handleSubmit}
    onFormSubmit={formValues => props.updateProfile(formValues)}
    header="update profile"
    initialValues={props.initialValues}
  />
);

const wrappedForm = reduxForm({ form: 'updateProfile', validate })(
  UpdateProfile,
);

const mapStateToProps = state => {
  let profile = state.profiles[state.auth.user._id];

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
