export default ({ company, title }) => {
  const errors = {};

  if (!company) {
    errors.company = 'company is required';
  }

  if (!title) {
    errors.title = 'job title is required';
  }

  return errors;
};
