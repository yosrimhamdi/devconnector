import { ADD_LIKE, ERROR_OCCURED } from '../types';
import posts from '../../../apis/posts';

export default (userId, postId) => async dispatch => {
  try {
    dispatch({ type: ADD_LIKE, payload: { userId, postId } });

    await posts.post(`/${postId}/likes`);
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err.response.data,
    });
  }
};
