import { UPDATE_PROFILE, ERROR_OCCURED } from '../types';
import profiles from '../../../apis/profiles';
import history from '../../../history';

export default formValues => async dispatch => {
  try {
    const response = await profiles.put('/', formValues);

    dispatch({
      type: UPDATE_PROFILE,
      payload: response.data,
    });

    history.push('/dashboard');
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err.response.data,
    });
  }
};
