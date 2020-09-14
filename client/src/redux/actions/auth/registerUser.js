import users from '../../../apis/users';
import { REGISTER_USER, ERROR_OCCURED } from '../types';
import history from '../../../history';

export default formValues => async dispatch => {
  try {
    const response = await users.post('/register', formValues);

    dispatch({
      type: REGISTER_USER,
      payload: response.data,
    });

    history.push('/dashboard');
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err.response.data,
    });
  }
};
