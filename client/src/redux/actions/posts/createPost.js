import { CREATE_POST, ERROR_OCCURED, LOADING, LOADED } from '../types';
import posts from '../../../apis/posts';

export default (formValues, clean) => async dispatch => {
  dispatch({ type: LOADING });

  try {
    const response = await posts.post('/', formValues);

    dispatch({
      type: CREATE_POST,
      payload: response.data,
    });

    clean();
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err.response.data,
    });
  }

  dispatch({ type: LOADED });
};
