import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../actions/types';

const INITIAL = {
  isAuthenticated: false,
  user: null,
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return { ...state, user: action.payload.user, isAuthenticated: true };
    case LOGOUT_USER:
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};
