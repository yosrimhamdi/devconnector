export default ({ school, degree, fieldOfStudy, from }) => {
  const errors = {};

  if (!school) {
    errors.school = 'school is required';
  }

  if (!degree) {
    errors.degree = 'degree is required';
  }

  if (!fieldOfStudy) {
    errors.fieldOfStudy = 'field of study is required';
  }

  if (!from) {
    errors.from = 'from data is required';
  }

  return errors;
};
