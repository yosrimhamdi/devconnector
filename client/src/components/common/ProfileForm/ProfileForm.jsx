import React from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import constructProfile from '../../../utils/constructProfile';
import { Input, TextArea, Select } from '../form';
import SocialsForm from './helpers/SocialsForm';

const ProfileForm = ({ handleSubmit, errors, onFormSubmit }) => {
  const onSubmit = formValues => {
    const profile = constructProfile(formValues);

    onFormSubmit(profile);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h1 className="form__title">update profile</h1>
      <h3 className="form__require-message">** = required</h3>
      <Field
        name="handle"
        placeholder="profile handle**"
        message="a unique handle for your profile URL. Your full name, company name, nickname"
        component={Input}
        responseError={errors.handleExists}
      />
      <Field
        name="status"
        message="give us an idea of where you are at in your career"
        component={Select}
      />
      <Field
        name="company"
        placeholder="company"
        message="could be your own company or one you work for"
        component={Input}
      />
      <Field
        name="website"
        placeholder="website"
        message="could be your own website or company one"
        component={Input}
      />
      <Field
        name="location"
        placeholder="location"
        message="city or city & state suggested (eg. Boston, MA"
        component={Input}
      />
      <Field
        name="skills"
        placeholder="skills**"
        message="please use comma, separated values (eg. HTML, CSS, PHP)"
        component={Input}
      />
      <Field
        name="githubUserName"
        placeholder="github username"
        message="if you want your latest repos and a Github link, include your username"
        component={Input}
      />
      <Field
        name="bio"
        placeholder="short bio"
        message="tell us a little about yourself"
        component={TextArea}
      />
      <SocialsForm />
      <div className="form__buttons-wrapper">
        <Link to="/dashboard" className="form__cancel-button">
          cancel
        </Link>
        <button className="form__submit-button" type="submit">
          submit
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps)(ProfileForm);
