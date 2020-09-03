import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import './CreateProfile.scss';

import validate from './validate';
import { createProfile } from '../../../redux/actions';
import Headline from '../../Headline';
import { Input, TextArea, Select } from '../../form';

class CreateProfile extends React.Component {
  onFormSubmit = formValues => {
    this.props.createProfile(formValues);
  };

  render() {
    const { errors } = this.props;

    return (
      <div className="create-profile">
        <Headline
          header="create your profile"
          subHeader="let`s get some information to make your profile stand out."
        />
        <form
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
          className="form"
        >
          <div className="create-profile__require-message">* = required</div>
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
  }
}

const wrappedForm = reduxForm({ form: 'createProfile', validate })(
  CreateProfile,
);

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps, { createProfile })(wrappedForm);
