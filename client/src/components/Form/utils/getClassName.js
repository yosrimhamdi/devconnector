import classnames from 'classnames';

// prettier-ignore
export default ({ touched, active, error: validationError }, error) => classnames('form__input', {
  'form__input--error': error || (validationError && touched && !active),
});
