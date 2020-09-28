import users from '../../../apis/users';
import { REGISTER_USER, ERROR_OCCURED, LOADING, LOADED } from '../types';
import history from '../../../history';

export default formValues => async dispatch => {
  dispatch({ type: LOADING });

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

  dispatch({ type: LOADED });
};
