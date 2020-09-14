import { REMOVE_LIKE, ERROR_OCCURED } from '../types';
import posts from '../../../apis/posts';

export default (userId, postId) => async dispatch => {
  try {
    dispatch({ type: REMOVE_LIKE, payload: { userId, postId } });

    await posts.delete(`/${postId}/likes`);
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err.response.data,
    });
  }
};
