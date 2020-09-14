import { DELETE_POST, ERROR_OCCURED } from '../types';
import posts from '../../../apis/posts';

export default id => async dispatch => {
  try {
    dispatch({
      type: DELETE_POST,
      payload: id,
    });

    await posts.delete(`/${id}`);
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err.response.data,
    });
  }
};
