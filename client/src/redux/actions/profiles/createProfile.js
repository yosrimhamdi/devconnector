import { CREATE_PROFILE, ERROR_HAS_OCCURED } from '../types';
import profiles from '../../../apis/profiles';
import history from '../../../history';

export default formValues => async dispatch => {
  try {
    const response = await profiles.post('/', formValues);

    dispatch({
      type: CREATE_PROFILE,
      payload: response.data,
    });

    history.push('/dashboard');
  } catch (err) {
    dispatch({
      type: ERROR_HAS_OCCURED,
      payload: err.response.data,
    });
  }
};
