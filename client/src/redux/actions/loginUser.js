import users from '../../apis/users';
import { LOGIN_USER, ERROR_HAS_OCCURED, CLEAR_ERRORS } from './types';

export default formValues => async dispatch => {
  try {
    const response = await users.post('/login', formValues);

    dispatch({ type: CLEAR_ERRORS });

    dispatch({
      type: LOGIN_USER,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_HAS_OCCURED,
      payload: err.response.data,
    });
  }
};
