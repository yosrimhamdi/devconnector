export default ({ handle, skills, status }) => {
  const errors = {};

  if (!handle) {
    errors.handle = 'handle is required';
  }

  if (!skills) {
    errors.skills = 'skills is required';
  }

  if (status === '* select professional status') {
    errors.status = 'status is required';
  }

  return errors;
};
