import { FETCH_USER_PROFILE, ERROR_HAS_OCCURED } from './types';
import profiles from '../../apis/profiles';

export default () => async dispatch => {
  try {
    const response = await profiles.get('/');

    dispatch({
      type: FETCH_USER_PROFILE,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_HAS_OCCURED,
      payload: err,
    });
  }
};
