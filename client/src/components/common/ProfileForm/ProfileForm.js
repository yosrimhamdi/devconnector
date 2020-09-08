import React from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';

import Headline from '../Headline';
import { Input, TextArea, Select, IconedInput } from '../form';
import CostumLink from '../CostumLink';
import constructProfile from '../../../utils/constructProfile';

class ProfileForm extends React.Component {
  state = { display: 'none', message: 'show' };

  toggleSocials = () => {
    this.setState(prevState => ({
      display: prevState.display === 'none' ? 'block' : 'none',
      message: prevState.message === 'show' ? 'hide' : 'show',
    }));
  };

  onFormSubmit = formValues => {
    const profile = constructProfile(formValues);

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
          <div className="form__social-toggle-btn-wrapper">
            <button
              className="form__social-toggle-btn"
              type="button"
              onClick={this.toggleSocials}
            >
              {this.state.message} social network links
            </button>
            <span className="form__social-toggle-message">Optional</span>
          </div>
          <div
            className="form__socials"
            style={{ display: this.state.display }}
          >
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
  }
}

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps)(ProfileForm);
