import { FETCH_COMMENTS, LOADING, LOADED } from '../types';
import posts from '../../../apis/posts';

export default postId => async dispatch => {
  dispatch({ type: LOADING });

  const response = await posts.get(`/${postId}/comments`);

  dispatch({
    type: FETCH_COMMENTS,
    payload: {
      comments: response.data.comments,
      postId,
    },
  });

  dispatch({ type: LOADED });
};
