import React from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';

import Headline from '../Headline';
import { Input, TextArea, Select } from '../form';
import CostumLink from '../CostumLink';

class ProfileForm extends React.Component {
  onFormSubmit = formValues => {
    const profile = formValues;

    profile.skills = profile.skills.split(',');

    this.props.onFormSubmit(profile);
  };

  render() {
    const { handleSubmit, errors, header, subHeader } = this.props;

    return (
      <div>
        <Headline header={header} subHeader={subHeader} />
        <form onSubmit={handleSubmit(this.onFormSubmit)} className="form">
          <CostumLink
            to="/dashboard"
            text="go back"
            bgColor="rgb(236, 235, 235)"
            color="black"
          />
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
          <button className="form__button" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps)(ProfileForm);
