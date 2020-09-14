import { FETCH_POSTS, ERROR_OCCURED } from '../types';
import posts from '../../../apis/posts';

export default () => async dispatch => {
  try {
    const response = await posts.get('/');

    dispatch({
      type: FETCH_POSTS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_OCCURED,
      payload: err.response.data,
    });
  }
};
