import { FETCH_PROFILES, LOADING, LOADED } from '../types';
import profiles from '../../../apis/profiles';

export default () => async dispatch => {
  dispatch({ type: LOADING });

  const response = await profiles.get('/all');

  dispatch({
    type: FETCH_PROFILES,
    payload: response.data,
  });

  dispatch({ type: LOADED });
};
