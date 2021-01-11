import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import './AddExperience.scss';
import validate from './validate';
import addExperience from '../../../redux/actions/profiles/addExperience';
import Input from '../../common/form/google/Input';
import TextArea from '../../common/form/google/TextArea';
import Button from '../../common/Button';
import Link from '../../common/Link';
import Spinner from '../../common/Spinner';
import BackSection from '../../common/BackSection';
import useDisableScroll from '../../../hooks/useDisableScroll';

const AddExperience = ({ handleSubmit, addExperience, loading }) => {
  useDisableScroll(loading);

  return (
    <>
      <form onSubmit={handleSubmit(addExperience)} className="add-experience">
        <BackSection title="experience" />
        <div className="add-experience__container">
          <div className="add-experience__content-wrapper">
            <h1 className="add-experience__title">add experience</h1>
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
            <Field
              name="to"
              type="date"
              component={Input}
              description="to date"
            />
            <Field
              name="description"
              placeholder="job description"
              description="tell us about the position"
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

const wrappedForm = reduxForm({ form: 'addExperience', validate })(
  AddExperience,
);

const mapStateToProps = ({ errors, loading }) => ({ errors, loading });

export default connect(mapStateToProps, { addExperience })(wrappedForm);
