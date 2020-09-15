import { FETCH_COMMENTS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMMENTS: {
      const { postId, comments } = action.payload;

      return { ...state, [postId]: comments };
    }
    default:
      return state;
  }
};
