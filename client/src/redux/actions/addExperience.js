import { ADD_EXPERIENCE, ERROR_HAS_OCCURED } from './types';
import profiles from '../../apis/profiles';

export default formValues => async dispatch => {
  try {
    const response = await profiles.post('/experience', formValues);

    dispatch({
      type: ADD_EXPERIENCE,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_HAS_OCCURED,
      payload: err.response.data,
    });
  }
};
