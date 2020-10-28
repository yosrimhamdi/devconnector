import { FETCH_PROFILES, LOADING, LOADED, SET_INITIAL_MOUNT } from '../types';
import profiles from '../../../apis/profiles';

export default page => async dispatch => {
  dispatch({ type: LOADING });

  const response = await profiles.get(`/all?page=${page}`);

  dispatch({
    type: FETCH_PROFILES,
    payload: response.data,
  });

  dispatch({ type: SET_INITIAL_MOUNT });

  dispatch({ type: LOADED });
};
