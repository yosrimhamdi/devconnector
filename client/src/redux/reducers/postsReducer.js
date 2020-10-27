import {
  FETCH_POSTS,
  CREATE_POST,
  DELETE_POST,
  FETCH_POST_PAGES,
  UPDATE_CURRENT_POST_PAGE,
} from '../actions/types';

const INITIAL = {
  data: null,
  pages: null,
  currentPage: 1,
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      if (state.data) {
        return { ...state, data: [...state.data, ...action.payload.posts] };
      }

      return { ...state, data: [...action.payload.posts] };

    case CREATE_POST:
      return { ...state, data: [action.payload.post, ...state.data] };
    case DELETE_POST: {
      const data = state.data.filter(post => post._id !== action.payload.id);

      return { ...state, data };
    }
    case FETCH_POST_PAGES:
      return { ...state, pages: action.payload.pages };
    case UPDATE_CURRENT_POST_PAGE:
      return { ...state, currentPage: action.payload.currentPage };
    default:
      return state;
  }
};
