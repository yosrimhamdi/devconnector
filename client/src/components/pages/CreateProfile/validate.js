export default ({ handle = '', skills = '', status }) => {
  const errors = {};

  if (!handle) {
    errors.handle = 'handle is required';
  }

  if (handle.includes(' ')) {
    errors.handle = 'the handle must not contain spaces';
  }

  if (!skills) {
    errors.skills = 'skills is required';
  }

  if (skills.includes(' ')) {
    errors.skills = 'must not contain spaces. Seprate by comma';
  }

  if (status === '* select professional status' || !status) {
    errors.status = 'status is required';
  }

  return errors;
};
