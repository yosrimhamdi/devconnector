import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import Headline from '../../common/Headline';
import { addExperience } from '../../../redux/actions';
import { Input, TextArea } from '../../common/form';
import CostumLink from '../../common/CostumLink';

class AddExperience extends React.Component {
  state = { disabled: false };

  toggleToDate = () => {
    const { disabled } = this.state;

    this.setState({ disabled: !disabled });
  };

  onFormSubmit = formValues => {
    this.props.addExperience(formValues);
  };

  render() {
    return (
      <div>
        <Headline
          header="add experience"
          subHeader="add any job or position that you have had in the past or current."
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
          <Field name="company" placeholder="* company" component={Input} />
          <Field name="title" placeholder="* job title" component={Input} />
          <Field name="location" placeholder="location" component={Input} />
          <div className="form__input-header">* from date</div>
          <Field name="from" type="date" component={Input} />
          <div className="form__input-header">to date</div>
          <Field
            name="to"
            type="date"
            component={Input}
            disabled={this.state.disabled}
          />
          <div className="form__control-wrapper">
            <label htmlFor="control" className="form__control">
              <input type="checkbox" onClick={this.toggleToDate} id="control" />{' '}
              Current Job?
            </label>
          </div>
          <Field
            name="description"
            placeholder="job description"
            message="tell us about the position"
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

const wrappedForm = reduxForm({ form: 'addExperience', validate })(
  AddExperience,
);

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps, { addExperience })(wrappedForm);
