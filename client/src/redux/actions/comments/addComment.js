import { ADD_COMMENT } from '../types';
import posts from '../../../apis/posts';

export default (postId, formValues) => async dispatch => {
  const response = await posts.post(`/${postId}/comments`, formValues);

  dispatch({
    type: ADD_COMMENT,
    payload: {
      comment: response.data.comment,
      postId,
    },
  });
};
