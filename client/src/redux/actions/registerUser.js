import users from '../../apis/users';
import { REGISTER_USER, ERROR_HAS_OCCURED, CLEAR_ERRORS } from './types';

export default formValues => async dispatch => {
  try {
    const response = await users.post('/register', formValues);

    dispatch({ type: CLEAR_ERRORS });

    dispatch({
      type: REGISTER_USER,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_HAS_OCCURED,
      payload: err.response.data,
    });
  }
};
