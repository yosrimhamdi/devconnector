import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import validate from './validate';
import { addEducation } from '../../../redux/actions';

import { Input, TextArea } from '../../common/form';
import { ToggleToDate, useToggleToDate } from '../../common/toggleToDate';

const AddEducation = ({ handleSubmit, addEducation }) => {
  const [disabled, toggleToDate] = useToggleToDate();

  return (
    <form onSubmit={handleSubmit(addEducation)} className="form">
      <h1 className="form__title">add education</h1>
      <div className="form__require-message">** = required</div>
      <Field name="school" placeholder="school**" component={Input} />
      <Field
        name="degree"
        placeholder="degree or certification**"
        component={Input}
      />
      <Field
        name="fieldOfStudy"
        placeholder="field of study**"
        component={Input}
      />
      <div className="form__date-header">from date**</div>
      <Field name="from" type="date" component={Input} />
      <div className="form__date-header">to date</div>
      <Field name="to" type="date" component={Input} disabled={disabled} />
      <ToggleToDate toggleToDate={toggleToDate} />
      <Field
        name="description"
        placeholder="program description"
        message="tell us about the program that you were in"
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
};

const wrappedForm = reduxForm({ form: 'addEducation', validate })(AddEducation);

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps, { addEducation })(wrappedForm);
