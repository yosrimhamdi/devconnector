import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Input } from '../../../common/form';
import validate from '../validate';

const Email = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" placeholder="email" component={Input} />
      <button type="submit">submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'login',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Email);
