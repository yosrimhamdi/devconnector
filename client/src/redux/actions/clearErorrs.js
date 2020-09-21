import { CLEAR_ERRORS } from './types';

export default () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
