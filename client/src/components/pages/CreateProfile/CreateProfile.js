import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import './CreateProfile.scss';

import validate from './validate';
import { createProfile } from '../../../redux/actions';
import ProfileForm from '../../ProfileForm/ProfileForm';

const CreateProfile = props => (
  <ProfileForm
    handleSubmit={props.handleSubmit}
    onFormSubmit={formValues => props.createProfile(formValues)}
  />
);

const wrappedForm = reduxForm({ form: 'createProfile', validate })(
  CreateProfile,
);

export default connect(null, { createProfile })(wrappedForm);
