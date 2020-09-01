import users from '../../apis/users';
import { LOGIN_USER } from './types';

export default formValues => async dispatch => {
  try {
    const response = await users.post('/login', formValues);

    dispatch({
      type: LOGIN_USER,
      payload: response.data,
    });
  } catch (err) {}
};
