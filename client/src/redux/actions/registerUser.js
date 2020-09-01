import users from '../../apis/users';
import { REGISTER_USER } from './types';

export default formValues => async dispatch => {
  try {
    const response = await users.post('/register', formValues);

    dispatch({
      type: REGISTER_USER,
      payload: response.data,
    });
  } catch (err) {}
};
