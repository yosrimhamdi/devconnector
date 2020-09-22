import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import validate from './validate';
import { addEducation } from '../../../redux/actions';

import Input from '../../common/form/google/Input';
import TextArea from '../../common/form/google/TextArea';

const AddEducation = ({ handleSubmit, addEducation }) => (
  <form onSubmit={handleSubmit(addEducation)} className="form">
    <h1 className="form__title">add education</h1>
    <Field
      name="school"
      placeholder="school"
      component={Input}
      marginBottom="2.5em"
    />
    <Field
      name="degree"
      placeholder="degree or certification"
      component={Input}
      marginBottom="2.5em"
    />
    <Field
      name="fieldOfStudy"
      placeholder="field of study**"
      component={Input}
      marginBottom="2.5em"
    />
    <Field
      name="from"
      type="date"
      component={Input}
      description="from date**"
      // marginBottom="2.5em"
    />
    <Field
      name="to"
      type="date"
      component={Input}
      description="to date"
      // marginBottom="2.5em"
    />
    <Field
      name="description"
      placeholder="program description"
      description="tell us about the program that you were in"
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
const wrappedForm = reduxForm({ form: 'addEducation', validate })(AddEducation);

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps, { addEducation })(wrappedForm);
