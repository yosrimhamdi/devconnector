import _ from 'lodash';

import { FETCH_POSTS, CREATE_POST, DELETE_POST } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ..._.mapKeys(action.payload.posts, '_id') };
    case CREATE_POST: {
      const { post } = action.payload;

      return { [post._id]: post, ...state };
    }
    case DELETE_POST:
      return { ..._.omit(state, action.payload) };
    default:
      return state;
  }
};
