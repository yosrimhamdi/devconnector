import { isURL } from 'validator';

export default ({
  handle = '',
  skills = '',
  status,
  website = '',
  youtube,
  facebook,
  linkedin,
  twitter,
  instagram,
}) => {
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

  if (website && !isURL(website, { require_protocol: true })) {
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

  if (youtube && !isURL(youtube, { require_protocol: true })) {
    errors.youtube = 'not a valid url (eg. https://yosrimhamdi.netlify.com)';
  }

  if (facebook && !isURL(facebook, { require_protocol: true })) {
    errors.facebook = 'not a valid url (eg. https://yosrimhamdi.netlify.com)';
  }

  if (linkedin && !isURL(linkedin, { require_protocol: true })) {
    errors.linkedin = 'not a valid url (eg. https://yosrimhamdi.netlify.com)';
  }

  if (twitter && !isURL(twitter, { require_protocol: true })) {
    errors.twitter = 'not a valid url (eg. https://yosrimhamdi.netlify.com)';
  }

  if (instagram && !isURL(instagram, { require_protocol: true })) {
    errors.instagram = 'not a valid url (eg. https://yosrimhamdi.netlify.com)';
  }

  return errors;
};
