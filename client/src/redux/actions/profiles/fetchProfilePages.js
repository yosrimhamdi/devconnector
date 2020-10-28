import { ERROR_OCCURED, FETCH_PROFILE_PAGES } from '../types';
import profiles from '../../../apis/profiles';

export default () => async dispatch => {
  try {
    const response = await profiles.get('/pages');

    dispatch({ type: FETCH_PROFILE_PAGES, payload: response.data });
  } catch (err) {
    dispatch({ type: ERROR_OCCURED });
  }
};
