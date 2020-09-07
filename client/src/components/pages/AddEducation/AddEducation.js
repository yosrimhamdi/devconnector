import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import Headline from '../../Headline';
import { addEducation } from '../../../redux/actions';
import { Input, TextArea } from '../../form';
import CostumLink from '../../CostumLink';

class AddEducation extends React.Component {
  onFormSubmit = formValues => {
    this.props.addEducation(formValues);
  };

  render() {
    return (
      <div>
        <Headline
          header="add education"
          subHeader="add any school, bootcamp, etc that you have attended."
        />
        <form
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
          className="form"
        >
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
          <Field name="to" type="date" component={Input} />
          <Field
            name="description"
            placeholder="program description"
            message="tell us about the program that you were in"
            component={TextArea}
          />
          <button className="form__button" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

const wrappedForm = reduxForm({ form: 'addEducation', validate })(AddEducation);

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps, { addEducation })(wrappedForm);
