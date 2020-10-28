import {
  FETCH_PROFILES,
  LOADING,
  LOADED,
  PROFILES_COMP_INIT_MOUNTED,
} from '../types';
import profiles from '../../../apis/profiles';

export default page => async dispatch => {
  dispatch({ type: LOADING });

  const response = await profiles.get(`/all?page=${page}`);

  dispatch({
    type: FETCH_PROFILES,
    payload: response.data,
  });

  if (page === 1) {
    dispatch({ type: PROFILES_COMP_INIT_MOUNTED });
  }

  dispatch({ type: LOADED });
};
