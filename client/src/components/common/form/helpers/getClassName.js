import classnames from 'classnames';

export default ({ touched, active, error: validationError }, responseError) =>
  classnames('form__input', {
    'form__input--error':
      responseError || (validationError && touched && !active),
  });
