import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import validate from './validate';
import { addExperience } from '../../../redux/actions';

import Input from '../../common/form/google/Input';
import TextArea from '../../common/form/google/TextArea';
import { ToggleToDate, useToggleToDate } from '../../common/toggleToDate';

const AddExperience = ({ handleSubmit, addExperience }) => {
  const [disabled, toggleToDate] = useToggleToDate();

  return (
    <form onSubmit={handleSubmit(addExperience)} className="form">
      <h1 className="form__title">add experience</h1>
      <div className="form__require-message">** = required</div>
      <Field name="company" placeholder="company**" component={Input} />
      <Field name="title" placeholder="job title**" component={Input} />
      <Field name="location" placeholder="location" component={Input} />
      <div className="form__date-header">from date**</div>
      <Field name="from" type="date" component={Input} />
      <div className="form__date-header">to date</div>
      <Field name="to" type="date" component={Input} disabled={disabled} />
      <ToggleToDate toggleToDate={toggleToDate} />
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
};

const wrappedForm = reduxForm({ form: 'addExperience', validate })(
  AddExperience,
);

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps, { addExperience })(wrappedForm);
