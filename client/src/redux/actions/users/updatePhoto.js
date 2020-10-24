import { ERROR_OCCURED, UPDATE_PHOTO } from '../types';
import users from '../../../apis/users';

export default (form, setLoading) => async dispatch => {
  try {
    const response = await users.post('/update/photo', form);

    dispatch({
      type: UPDATE_PHOTO,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err.response.data,
    });
  }

  setLoading(false);
};
