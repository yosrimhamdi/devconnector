import { PROFILES_COMP_INIT_MOUNTED } from '../actions/types';

const INITIAL = {
  profiles: true,
  posts: true,
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case PROFILES_COMP_INIT_MOUNTED:
      return { ...state, profiles: false };
    default:
      return state;
  }
};
