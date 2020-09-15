import { DELETE_COMMENT } from '../types';
import posts from '../../../apis/posts';

export default (postId, commentId) => async dispatch => {
  dispatch({
    type: DELETE_COMMENT,
    payload: { postId, commentId },
  });

  await posts.delete(`/${postId}/comments/${commentId}`);
};
