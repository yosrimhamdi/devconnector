import {
  FETCH_POSTS,
  CREATE_POST,
  DELETE_POST,
  FETCH_POST_PAGES,
  UPDATE_CURRENT_POST_PAGE,
} from '../actions/types';

const INITIAL = {
  data: [],
  pages: null,
  currentPage: 1,
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      // return [...state, ...action.payload.posts];
      return { ...state, data: [...state.data, ...action.payload.posts] };
    case CREATE_POST:
      return [action.payload.post, ...state];
    case DELETE_POST:
      return state.filter(post => post._id !== action.payload);
    case FETCH_POST_PAGES:
      return { ...state, pages: action.payload.pages };
    case UPDATE_CURRENT_POST_PAGE:
      return { ...state, currentPage: action.payload.currentPage };
    default:
      return state;
  }
};
