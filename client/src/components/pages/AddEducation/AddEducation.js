import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import Headline from '../../common/Headline';
import { addEducation } from '../../../redux/actions';
import { Input, TextArea } from '../../common/form';
import CostumLink from '../../common/CostumLink';

import toggleToDate from '../../common/hooks/toggleToDate';

const AddEducation = props => {
  const [disabled, toggle] = toggleToDate();

  const onFormSubmit = formValues => {
    props.addEducation(formValues);
  };

  return (
    <div>
      <Headline
        header="add education"
        subHeader="add any school, bootcamp, etc that you have attended."
      />
      <form onSubmit={props.handleSubmit(onFormSubmit)} className="form">
        <CostumLink
          to="/dashboard"
          text="go back"
          bgColor="rgb(236, 235, 235)"
          color="black"
        />
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
        <div className="form__control-wrapper">
          <label htmlFor="control" className="form__control">
            <input type="checkbox" onClick={toggle} id="control" />
            <span className="form__control-message">current job?</span>
          </label>
        </div>
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
