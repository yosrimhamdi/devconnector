import { isURL } from 'validator';

export default ({ handle = '', skills = '', status, website = '' }) => {
  const errors = {};

  if (!handle) {
    errors.handle = 'handle is required';
  }

  if (handle.includes(' ')) {
    errors.handle = 'the handle must not contain spaces';
  }

  if (status === '* select professional status') {
    errors.status = 'status is required';
  }

  if (!isURL(website, { require_protocol: true })) {
    errors.website =
      'please sepecify a valid url (eg. https://yosrimhamdi.netlify.com)';
  }

  if (!skills) {
    errors.skills = 'skills is required';
  }

  if (skills.includes(' ')) {
    errors.skills =
      'must not contain spaces. Please use comma, separated values';
  }

  return errors;
};
