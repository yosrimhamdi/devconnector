import { ADD_COMMENT, FETCH_COMMENTS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMMENTS: {
      const { postId, comments } = action.payload;

      return { ...state, [postId]: comments };
    }
    case ADD_COMMENT: {
      const { postId, comment } = action.payload;

      state[postId] = [comment, ...state[postId]];

      return { ...state };
    }
    default:
      return state;
  }
};
