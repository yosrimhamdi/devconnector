import classnames from 'classnames';

export default (
  { submitFailed, active, error: validationError },
  responseError,
) =>
  classnames('input', {
    'inpud--invalid':
      responseError || (submitFailed && !active && validationError),
  });
