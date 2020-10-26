import { ERROR_OCCURED, FETCH_POST_PAGES } from '../types';
import posts from '../../../apis/posts';

export default () => async dispatch => {
  try {
    const response = await posts.get('/pages');

    dispatch({ type: FETCH_POST_PAGES, payload: response.data });
  } catch (err) {
    dispatch({ type: ERROR_OCCURED });
  }
};
