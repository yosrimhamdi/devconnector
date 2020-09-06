import { UPDATE_PROFILE, ERROR_HAS_OCCURED } from './types';
import profiles from '../../apis/profiles';

export default formValues => async dispatch => {
  try {
    const response = await profiles.put('/', formValues);

    dispatch({
      type: UPDATE_PROFILE,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_HAS_OCCURED,
      payload: err.response.data,
    });
  }
};
