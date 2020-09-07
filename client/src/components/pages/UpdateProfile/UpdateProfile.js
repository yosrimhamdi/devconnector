import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from '../../common/ProfileForm/validate';
import ProfileForm from '../../common/ProfileForm/ProfileForm';
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

const mapStateToProps = state => ({
  initialValues: state.profiles[state.auth.user._id],
});

export default connect(mapStateToProps, { updateProfile })(wrappedForm);
