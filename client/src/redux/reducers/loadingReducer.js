import { LOADING, LOADED } from '../actions/types';

export default (state = true, action) => {
  switch (action.type) {
    case LOADING:
      return true;
    case LOADED:
      return false;
    default:
      return state;
  }
};
