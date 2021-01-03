import users from '../../../apis/users';
import { LOGIN_USER, ERROR_OCCURED, LOADING, LOADED } from '../types';
import history from '../../../history';

export default formValues => async dispatch => {
  dispatch({ type: LOADING });

  try {
    const response = await users.post('/login', formValues);

    dispatch({
      type: LOGIN_USER,
      payload: response.data,
    });

    history.push('/posts');
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err.response.data,
    });
  }

  dispatch({ type: LOADED });
};
