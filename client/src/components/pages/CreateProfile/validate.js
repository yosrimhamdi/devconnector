export default ({ handle, skills }) => {
  const errors = {};

  if (!handle) {
    errors.handle = 'handle is required';
  }

  if (!skills) {
    errors.skills = 'skills is required';
  }

  return errors;
};
