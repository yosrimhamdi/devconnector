import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import './AddEducation.scss';
import validate from './validate';
import addEducation from '../../../redux/actions/profiles/addEducation';
import Input from '../../common/form/google/Input';
import TextArea from '../../common/form/google/TextArea';
import Button from '../../common/Button';
import Link from '../../common/Link';
import Spinner from '../../common/Spinner';
import BackSection from '../../common/BackSection';
import useDisableScroll from '../../../hooks/useDisableScroll';

const AddEducation = ({ handleSubmit, addEducation, loading }) => {
  useDisableScroll(loading);

  return (
    <>
      <form onSubmit={handleSubmit(addEducation)} className="add-education">
        <BackSection title="education" />
        <div className="add-education__container">
          <div className="add-education__content-wrapper">
            <h1 className="add-education__title">add education</h1>
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
            />
            <Field
              name="to"
              type="date"
              component={Input}
              description="to date"
            />
            <Field
              name="description"
              placeholder="program description"
              description="tell us about the program that you were in"
              component={TextArea}
            />
            <div className="add-experience__button-wrapper">
              <Link to="/dashboard" text="cancel" transparent rounded />
              <Button text="submit" rounded />
            </div>
            <Spinner visible={loading} onBottom />
          </div>
        </div>
      </form>
    </>
  );
};
const wrappedForm = reduxForm({ form: 'addEducation', validate })(AddEducation);

const mapStateToProps = ({ errors, loading }) => ({ errors, loading });

export default connect(mapStateToProps, { addEducation })(wrappedForm);
