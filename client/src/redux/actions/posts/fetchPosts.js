import { FETCH_POSTS, ERROR_OCCURED, LOADING, LOADED } from '../types';
import posts from '../../../apis/posts';

export default page => async dispatch => {
  dispatch({ type: LOADING });

  try {
    const response = await posts.get(`?page=${page}`);

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

  dispatch({ type: LOADED });
};
