import { ERROR_OCCURED, LOADING, LOADED } from '../types';
import users from '../../../apis/users';

export default (formValues, nextPage) => async dispatch => {
  dispatch({ type: LOADING });

  try {
    await users.post('/register/check', formValues);

    nextPage();
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err.response.data,
    });
  }

  dispatch({ type: LOADED });
};
