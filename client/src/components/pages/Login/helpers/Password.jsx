import React from 'react';
import { Field, reduxForm } from 'redux-form';

import validate from '../validate';
import { Input } from '../../../common/form';

const Password = ({ handleSubmit, previousPage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="password"
        type="password"
        placeholder="password"
        component={Input}
      />
      <button type="submit">submit</button>
      <button type="button" onClick={previousPage}>
        back
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'login',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Password);
