import { ADD_EDUCATION, ERROR_HAS_OCCURED } from './types';
import profiles from '../../apis/profiles';

export default formValues => async dispatch => {
  try {
    const response = await profiles.post('/education', formValues);

    dispatch({
      type: ADD_EDUCATION,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_HAS_OCCURED,
      payload: err.response.data,
    });
  }
};
