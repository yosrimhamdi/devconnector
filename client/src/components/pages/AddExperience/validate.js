export default ({ company, title, from }) => {
  const errors = {};

  if (!company) {
    errors.company = 'company is required';
  }

  if (!title) {
    errors.title = 'job title is required';
  }

  if (!from) {
    errors.from = 'from date is required';
  }

  return errors;
};
