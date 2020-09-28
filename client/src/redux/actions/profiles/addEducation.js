import { ADD_EDUCATION, ERROR_OCCURED, LOADING, LOADED } from '../types';
import profiles from '../../../apis/profiles';
import history from '../../../history';

export default formValues => async dispatch => {
  dispatch({ type: LOADING });

  try {
    const response = await profiles.post('/education', formValues);

    dispatch({
      type: ADD_EDUCATION,
      payload: response.data,
    });

    history.push('/dashboard');
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err.response.data,
    });
  }

  dispatch({ type: LOADED });
};
