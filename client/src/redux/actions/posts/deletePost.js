import { DELETE_POST, ERROR_OCCURED, LOADING, LOADED } from '../types';
import posts from '../../../apis/posts';

export default id => async dispatch => {
  dispatch({ type: LOADING });

  try {
    await posts.delete(`/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: { id },
    });
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err.response.data,
    });
  }

  dispatch({ type: LOADED });
};
