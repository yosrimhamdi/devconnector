import { FETCH_USER_PROFILE, ERROR_OCCURED, LOADING, LOADED } from '../types';
import profiles from '../../../apis/profiles';

export default () => async dispatch => {
  dispatch({ type: LOADING });

  try {
    const response = await profiles.get('/');

    dispatch({
      type: FETCH_USER_PROFILE,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err,
    });
  }

  dispatch({ type: LOADED });
};
