import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import validate from './validate';
import { addEducation } from '../../../redux/actions';
import useToggleToDate from '../../../hooks/useToggleToDate';

import Headline from '../../common/Headline';
import { Input, TextArea } from '../../common/form';
import ToggleToDate from '../../common/ToggleToDate';

const AddEducation = ({ handleSubmit, addEducation }) => {
  const [disabled, toggleToDate] = useToggleToDate();

  return (
    <div>
      <Headline
        header="add education"
        subHeader="add any school, bootcamp, etc that you have attended."
      />
      <form onSubmit={handleSubmit(addEducation)} className="form">
        <Link to="/dashboard" className="link link--grey">
          go back
        </Link>
        <div className="form__require-message">* = required</div>
        <Field name="school" placeholder="* school" component={Input} />
        <Field
          name="degree"
          placeholder="* degree or certification"
          component={Input}
        />
        <Field
          name="fieldOfStudy"
          placeholder="* field of study"
          component={Input}
        />
        <div className="form__input-header">* from date</div>
        <Field name="from" type="date" component={Input} />
        <div className="form__input-header">to date</div>
        <Field name="to" type="date" component={Input} disabled={disabled} />
        <ToggleToDate toggleToDate={toggleToDate} />
        <Field
          name="description"
          placeholder="program description"
          message="tell us about the program that you were in"
          component={TextArea}
        />
        <button className="form__submit-btn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

const wrappedForm = reduxForm({ form: 'addEducation', validate })(AddEducation);

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps, { addEducation })(wrappedForm);
