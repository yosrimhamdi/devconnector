import _ from 'lodash';

import {
  FETCH_PROFILES,
  FETCH_PROFILE,
  FETCH_PROFILE_PAGES,
  UPDATE_CURRENT_PROFILE_PAGE,
} from '../actions/types';

const INTIAL = {
  data: {},
  pages: null,
  currentPage: 1,
};

export default (state = INTIAL, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return {
        ...state,
        data: { ...state.data, ..._.mapKeys(action.payload.profiles, '_id') },
      };
    case FETCH_PROFILE: {
      const { profile } = action.payload;

      return {
        ...state,
        data: { ...state.data, [profile._id]: profile },
      };
    }
    case FETCH_PROFILE_PAGES:
      return { ...state, pages: action.payload.pages };
    case UPDATE_CURRENT_PROFILE_PAGE:
      return { ...state, currentPage: action.payload.currentPage };
    default:
      return state;
  }
};
