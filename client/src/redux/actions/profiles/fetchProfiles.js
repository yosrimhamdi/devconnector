import { FETCH_PROFILES, LOADING, LOADED } from '../types';
import profiles from '../../../apis/profiles';

export default page => async dispatch => {
  dispatch({ type: LOADING });

  const response = await profiles.get(`/all?page=${page}`);

  dispatch({
    type: FETCH_PROFILES,
    payload: response.data,
  });

  dispatch({ type: LOADED });
};
