import classnames from 'classnames';

// prettier-ignore
export default ({ touched, active, error: validationError }, responseError) => classnames('form__input', {
  'form__input--error': responseError || (validationError && touched && !active),
});
