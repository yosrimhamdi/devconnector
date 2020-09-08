import _ from 'lodash';

const LINKS = ['youtube', 'facebook', 'linkedin', 'twitter', 'instagram'];

export default formValues => {
  let profile = formValues;
  const social = {};

  LINKS.forEach(link => {
    if (profile[link]) {
      social[link] = profile[link];

      profile = _.omit(profile, link);
    }
  });

  profile.social = social;

  return profile;
};
