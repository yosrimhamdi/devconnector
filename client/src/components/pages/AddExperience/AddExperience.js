import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from './validate';
import Headline from '../../Headline';

class AddExperience extends React.Component {
  onFormSubmit = () => {
    // console.log(formValues);
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
          <div className="form__require-message">* = required</div>
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

export default connect(mapStateToProps)(wrappedForm);
