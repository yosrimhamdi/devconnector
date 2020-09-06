import React from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';

import './ProfileForm.scss';
import Headline from '../Headline';
import { Input, TextArea, Select } from '../form';

const ProfileForm = ({
  handleSubmit,
  onFormSubmit,
  errors,
  header,
  subHeader,
}) => (
  <div className="profile-form">
    <Headline header={header} subHeader={subHeader} />
    <form onSubmit={handleSubmit(onFormSubmit)} className="form">
      <div className="profile-form__require-message">* = required</div>
      <Field
        name="handle"
        placeholder="* profile handle"
        message="a unique handle for your profile URL. Your full name, company name, nickname"
        type="text"
        component={Input}
        responseError={errors.handleExists}
      />
      <Field
        name="status"
        message="give us an idea of where you are at in your career"
        component={Select}
      />
      <Field
        name="compmany"
        placeholder="compnay"
        type="text"
        message="could be your own company or one you work for"
        component={Input}
      />
      <Field
        name="website"
        placeholder="website"
        type="text"
        message="could be your own website or company one"
        component={Input}
      />
      <Field
        name="location"
        placeholder="location"
        type="text"
        message="city or city & state suggested (eg. Boston, MA"
        component={Input}
      />
      <Field
        name="skills"
        placeholder="* skills"
        type="text"
        message="please use comma, separated values (eg. HTML, CSS, PHP)"
        component={Input}
      />
      <Field
        name="githubUserName"
        placeholder="github username"
        type="text"
        message="if you want your latest repos and a Github link, include your username"
        component={Input}
      />
      <Field
        name="bio"
        placeholder="short bio"
        message="tell us a little about yourself"
        component={TextArea}
      />
      <button className="form__button" type="submit">
        submit
      </button>
    </form>
  </div>
);

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps)(ProfileForm);
