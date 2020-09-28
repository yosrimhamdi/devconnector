import {
  FETCH_POSTS,
  CREATE_POST,
  DELETE_POST,
  CLEAR_POSTS,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return [...state, ...action.payload.posts];
    case CREATE_POST:
      return [action.payload.post, ...state];
    case DELETE_POST:
      return state.filter(post => post._id !== action.payload);
    case CLEAR_POSTS:
      return [];
    default:
      return state;
  }
};
