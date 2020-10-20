import _ from 'lodash';

import {
  FETCH_PROFILES,
  FETCH_USER_PROFILE,
  FETCH_PROFILE,
  ADD_EXPERIENCE,
  ADD_EDUCATION,
  REMOVE_EXPERIENCE,
  REMOVE_EDUCATION,
  CREATE_PROFILE,
  UPDATE_PROFILE,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return { ...state, ..._.mapKeys(action.payload.profiles, '_id') };
    case FETCH_USER_PROFILE:
    case FETCH_PROFILE:
    case ADD_EXPERIENCE:
    case ADD_EDUCATION:
    case REMOVE_EXPERIENCE:
    case REMOVE_EDUCATION:
    case CREATE_PROFILE:
    case UPDATE_PROFILE: {
      const { profile } = action.payload;

      return { ...state, [profile.user._id]: profile };
    }
    default:
      return state;
  }
};
