import { FETCH_PROFILES, FETCH_USER_PROFILE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return [...state, ...action.payload];
    case FETCH_USER_PROFILE:
      return [...state, action.payload];
    default:
      return state;
  }
};
