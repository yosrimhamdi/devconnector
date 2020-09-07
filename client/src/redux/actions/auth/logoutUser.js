import { LOGOUT_USER, ERROR_HAS_OCCURED } from '../types';
import users from '../../../apis/users';

export default () => async dispatch => {
  try {
    await users.get('/logout');

    dispatch({ type: LOGOUT_USER });
  } catch (err) {
    dispatch({
      type: ERROR_HAS_OCCURED,
      payload: err.response.data,
    });
  }
};
