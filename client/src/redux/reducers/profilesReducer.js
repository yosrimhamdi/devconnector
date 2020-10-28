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
  FETCH_PROFILE_PAGES,
  UPDATE_CURRENT_PROFILE_PAGE,
} from '../actions/types';

const INTIAL = {
  data: null,
  pages: null,
  currentPage: 1,
};

export default (state = INTIAL, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      if (state.data) {
        return {
          ...state,
          data: {
            ...state.data,
            ..._.mapKeys(action.payload.profiles, 'user._id'),
          },
        };
      }

      return {
        ...state,
        data: { ..._.mapKeys(action.payload.profiles, 'user._id') },
      };
    case FETCH_USER_PROFILE:
    case FETCH_PROFILE:
    case ADD_EXPERIENCE:
    case ADD_EDUCATION:
    case REMOVE_EXPERIENCE:
    case REMOVE_EDUCATION:
    case CREATE_PROFILE:
    case UPDATE_PROFILE: {
      const { profile } = action.payload;

      return { ...state, data: { ...state.data, [profile.user._id]: profile } };
    }
    case FETCH_PROFILE_PAGES:
      return { ...state, pages: action.payload.pages };
    case UPDATE_CURRENT_PROFILE_PAGE:
      return { ...state, currentPage: action.payload.currentPage };
    default:
      return state;
  }
};
