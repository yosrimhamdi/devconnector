import { CLEAR_ERRORS } from '../types';

export default () => async dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
