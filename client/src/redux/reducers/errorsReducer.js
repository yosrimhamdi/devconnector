import { ERROR_OCCURED, CLEAR_ERRORS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case ERROR_OCCURED:
      return { ...action.payload };
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};
