import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import validate from './validate';
import { addExperience } from '../../../redux/actions';

import Input from '../../common/form/google/Input';
import TextArea from '../../common/form/google/TextArea';

const AddExperience = ({ handleSubmit, addExperience }) => (
  <form onSubmit={handleSubmit(addExperience)} className="form">
    <h1 className="form__title">add experience</h1>
    <Field
      name="company"
      placeholder="company**"
      component={Input}
      marginBottom="2.5em"
    />
    <Field
      name="title"
      placeholder="job title**"
      component={Input}
      marginBottom="2.5em"
    />
    <Field
      name="location"
      placeholder="location"
      component={Input}
      marginBottom="2.5em"
    />
    <Field
      name="from"
      type="date"
      component={Input}
      description="from date**"
    />
    <Field name="to" type="date" component={Input} description="to date" />
    <Field
      name="description"
      placeholder="job description"
      description="tell us about the position"
      component={TextArea}
    />
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

const wrappedForm = reduxForm({ form: 'addExperience', validate })(
  AddExperience,
);

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps, { addExperience })(wrappedForm);
