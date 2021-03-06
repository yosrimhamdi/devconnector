import { FETCH_PROFILE, ERROR_OCCURED } from '../types';
import profiles from '../../../apis/profiles';

export default handle => async dispatch => {
  try {
    const response = await profiles.get(`/${handle}`);

    dispatch({
      type: FETCH_PROFILE,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err.response.data,
    });
  }
};
