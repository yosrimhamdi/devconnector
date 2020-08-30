import { FETCH_PROFILES } from './types';
import profiles from '../../apis/profiles';

export default () => async dispatch => {
  const response = await profiles.get('/all');

  dispatch({
    type: FETCH_PROFILES,
    payload: response.data.profiles,
  });
};
