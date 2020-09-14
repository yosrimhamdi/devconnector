import React from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import constructProfile from '../../../utils/constructProfile';
import useToggle from '../../../hooks/useToggle';

import Headline from '../Headline';
import { Input, TextArea, Select, IconedInput } from '../form';

const ProfileForm = ({
  handleSubmit,
  errors,
  header,
  subHeader,
  onFormSubmit,
}) => {
  const [display, toggle] = useToggle();

  const message = display ? 'hide' : 'show';

  const onSubmit = formValues => {
    const profile = constructProfile(formValues);

    onFormSubmit(profile);
  };

  return (
    <div>
      <Headline header={header} subHeader={subHeader} />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Link to="/dashboard" className="link link--grey">
          got back
        </Link>
        <div className="form__require-message">* = required</div>
        <Field
          name="handle"
          placeholder="* profile handle"
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
          name="compmany"
          placeholder="compnay"
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
          placeholder="* skills"
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
        <div className="form__social-toggle-btn-wrapper">
          <button
            className="form__social-toggle-btn"
            type="button"
            onClick={toggle}
          >
            <span className="form__social-toggle-message">{message}</span>
            <span>social network links</span>
          </button>
          <span className="form__social-toggle-optional-message">Optional</span>
        </div>
        <div className="form__socials" style={{ display }}>
          <Field
            name="youtube"
            placeholder="youtube channel URL"
            component={IconedInput}
          />
          <Field
            name="facebook"
            placeholder="facebook page URL"
            component={IconedInput}
          />
          <Field
            name="linkedin"
            placeholder="linkedin profile URL"
            component={IconedInput}
          />
          <Field
            name="twitter"
            placeholder="twitter profile URL"
            component={IconedInput}
          />
          <Field
            name="instagram"
            placeholder="instagram page URL"
            component={IconedInput}
          />
        </div>
        <button className="form__submit-btn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps)(ProfileForm);
