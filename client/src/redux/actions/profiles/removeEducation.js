import { REMOVE_EDUCATION, ERROR_HAS_OCCURED } from '../types';
import profiles from '../../../apis/profiles';

export default id => async dispatch => {
  try {
    const response = await profiles.delete(`/education/${id}`);

    dispatch({
      type: REMOVE_EDUCATION,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_HAS_OCCURED,
      payload: err.response.data,
    });
  }
};
