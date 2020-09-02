import _ from 'lodash';

import {
  FETCH_PROFILES,
  FETCH_USER_PROFILE,
  REMOVE_EXPERIENCE,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return { ...state, ..._.mapKeys(action.payload.profiles, 'user._id') };
    case FETCH_USER_PROFILE:
    case REMOVE_EXPERIENCE:
      return { ...state, [action.payload.profile.user._id]: action.payload.profile };
    default:
      return state;
  }
};
