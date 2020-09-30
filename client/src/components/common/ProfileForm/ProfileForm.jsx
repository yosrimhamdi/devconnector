import React, { useState, useEffect } from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';

import './ProfileForm.scss';
import constructProfile from '../../../utils/constructProfile';
import Input from '../form/google/Input';
import TextArea from '../form/google/TextArea';
import Select from '../form/google/Select';
import SocialsForm from './helpers/SocialsForm';
import { clearErrors } from '../../../redux/actions';
import Spinner from '../Spinner';
import Link from '../Link';
import Button from '../Button';
import BackSection from './helpers/BackSection';

const ProfileForm = ({
  handleSubmit,
  errors,
  onFormSubmit,
  clearErrors,
  loading,
  title,
}) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onDocumentScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else if (window.scrollY === 0) {
        setScrolled(false);
      }
    };

    document.addEventListener('scroll', onDocumentScroll);

    return () => document.removeEventListener('scroll', onDocumentScroll);
  }, []);

  const onSubmit = formValues => {
    const profile = constructProfile(formValues);

    onFormSubmit(profile);
  };

  return (
    <div className="profile-form">
      <BackSection scrolled={scrolled} />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 className="form__title">{title}</h1>
        <Field
          name="handle"
          placeholder="profile handle**"
          description="a unique handle for your profile URL. Your full name, company name, nickname"
          component={Input}
          responseError={errors.handleExists}
          onFocus={clearErrors}
        />
        <Field
          name="status"
          description="give us an idea of where you are at in your career"
          component={Select}
        />
        <Field
          name="company"
          placeholder="company"
          description="could be your own company or one you work for"
          component={Input}
        />
        <Field
          name="website"
          placeholder="website"
          description="could be your own website or company one"
          component={Input}
        />
        <Field
          name="location"
          placeholder="location"
          description="city or city & state suggested (eg. Boston, MA)"
          component={Input}
        />
        <Field
          name="skills"
          placeholder="skills**"
          description="please use comma, separated values (eg. HTML, CSS, PHP)"
          component={Input}
        />
        <Field
          name="githubUserName"
          placeholder="github username"
          description="if you want your latest repos and a Github link, include your username"
          component={Input}
        />
        <Field
          name="bio"
          placeholder="short bio"
          description="tell us a little about yourself"
          component={TextArea}
        />
        <SocialsForm />
        <div className="form__buttons-wrapper">
          <Spinner hidden={!loading} />
          <Link to="/dashboard" text="cancel" transparent rounded />
          <Button text="submit" rounded />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ errors, loading }) => ({ errors, loading });

export default connect(mapStateToProps, { clearErrors })(ProfileForm);
