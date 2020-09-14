import _ from 'lodash';

import { GET_LIKES, ADD_LIKE, REMOVE_LIKE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_LIKES: {
      const { postId, likes } = action.payload;

      return { ...state, [postId]: Object.keys(_.mapKeys(likes, 'user')) };
    }
    case ADD_LIKE: {
      const { userId, postId } = action.payload;

      state[postId].push(userId);

      return { ...state };
    }
    case REMOVE_LIKE: {
      const { userId, postId } = action.payload;

      state[postId] = state[postId].filter(user => userId !== user);

      return { ...state };
    }
    default:
      return state;
  }
};
