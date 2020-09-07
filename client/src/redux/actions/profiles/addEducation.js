import { ADD_EDUCATION, ERROR_HAS_OCCURED } from '../types';
import profiles from '../../../apis/profiles';
import history from '../../../history';

export default formValues => async dispatch => {
  try {
    const response = await profiles.post('/education', formValues);

    dispatch({
      type: ADD_EDUCATION,
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
