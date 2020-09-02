import { FETCH_USER_PROFILE } from './types';
import profiles from '../../apis/profiles';

export default () => async dispatch => {
  try {
    const response = await profiles.get('/');

    dispatch({
      type: FETCH_USER_PROFILE,
      payload: response.data,
    });
  } catch (err) {
    // skip
  }
};
