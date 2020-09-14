import { ERROR_OCCURED } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case ERROR_OCCURED:
      return { ...action.payload };
    default:
      return state;
  }
};
