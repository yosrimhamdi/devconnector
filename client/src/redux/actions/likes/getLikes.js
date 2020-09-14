import { GET_LIKES } from '../types';
import posts from '../../../apis/posts';

export default postId => async dispatch => {
  const response = await posts.get(`/${postId}/likes`);

  dispatch({
    type: GET_LIKES,
    payload: response.data,
  });
};
