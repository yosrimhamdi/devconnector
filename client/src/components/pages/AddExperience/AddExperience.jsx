import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import { addExperience } from '../../../redux/actions';
import Input from '../../common/form/google/Input';
import TextArea from '../../common/form/google/TextArea';
import Button from '../../common/Button';
import Link from '../../common/Link';
import Spinner from '../../common/Spinner';

const AddExperience = ({ handleSubmit, addExperience, loading }) => (
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
      <Spinner hidden={!loading} />
      <Link to="/dashboard" text="cancel" transparent rounded />
      <Button text="submit" rounded />
    </div>
  </form>
);

const wrappedForm = reduxForm({ form: 'addExperience', validate })(
  AddExperience,
);

const mapStateToProps = ({ errors, loading }) => ({ errors, loading });

export default connect(mapStateToProps, { addExperience })(wrappedForm);
