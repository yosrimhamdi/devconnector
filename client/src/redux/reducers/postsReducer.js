import { FETCH_POSTS, CREATE_POST } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return [...action.payload.posts];
    case CREATE_POST:
      return [action.payload.post, ...state];
    default:
      return state;
  }
};
