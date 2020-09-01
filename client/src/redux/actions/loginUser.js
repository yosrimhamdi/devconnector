import users from '../../apis/users';
import { LOGIN_USER, ERROR_HAS_OCCURED } from './types';
import history from '../../history';

export default formValues => async dispatch => {
  try {
    const response = await users.post('/login', formValues);

    dispatch({
      type: LOGIN_USER,
      payload: response.data.user,
    });

    history.push('/dashboard');
  } catch (err) {
    dispatch({
      type: ERROR_HAS_OCCURED,
      payload: err.response.data,
    });
  }
};
