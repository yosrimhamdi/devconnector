import { FETCH_COMMENTS } from '../types';
import posts from '../../../apis/posts';

export default postId => async dispatch => {
  const response = await posts.get(`/${postId}/comments`);

  dispatch({
    type: FETCH_COMMENTS,
    payload: {
      comments: response.data.comments,
      postId,
    },
  });
};
