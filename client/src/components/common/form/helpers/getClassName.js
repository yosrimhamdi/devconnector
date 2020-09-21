import classnames from 'classnames';

export default (
  { submitFailed, active, error: validationError },
  responseError,
) =>
  classnames('form__input-wrapper', {
    'form__input-wrapper--invalid':
      responseError || (submitFailed && !active && validationError),
  });
