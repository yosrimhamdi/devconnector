import {
  FETCH_PROFILES,
  FETCH_PROFILE,
  FETCH_PROFILE_PAGES,
  UPDATE_CURRENT_PROFILE_PAGE,
} from '../actions/types';

const INTIAL = {
  data: [],
  pages: null,
  currentPage: 1,
};

export default (state = INTIAL, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return { ...state, data: [...action.payload.profiles] };
    case FETCH_PROFILE:
      return { ...state, data: [...state.data, action.payload.profile] };
    case FETCH_PROFILE_PAGES:
      return { ...state, pages: action.payload.pages };
    case UPDATE_CURRENT_PROFILE_PAGE:
      return { ...state, currentPage: action.payload.currentPage };
    default:
      return state;
  }
};
