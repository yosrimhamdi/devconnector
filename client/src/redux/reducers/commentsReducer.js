import { ADD_COMMENT, DELETE_COMMENT, FETCH_COMMENTS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMMENTS: {
      const { postId, comments } = action.payload;

      return { ...state, [postId]: comments };
    }
    case ADD_COMMENT: {
      const { postId, comment } = action.payload;

      const newState = { ...state };

      newState[postId] = [comment, ...newState[postId]];

      return newState;
    }
    case DELETE_COMMENT: {
      const { postId, commentId } = action.payload;

      const newState = { ...state };

      newState[postId] = newState[postId].filter(
        comment => comment._id !== commentId,
      );

      return newState;
    }
    default:
      return state;
  }
};
