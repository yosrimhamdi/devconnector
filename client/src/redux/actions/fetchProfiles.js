import { FETCH_PROFILES } from './types';
import devConnector from '../../apis/devConnector';

export default () => async dispatch => {
  const response = await devConnector.get('/api/profiles/all');

  dispatch({
    type: FETCH_PROFILES,
    payload: response.data.profiles,
  });
};
