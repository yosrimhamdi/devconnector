import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_PHOTO,
} from '../actions/types';

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
    case UPDATE_PHOTO: {
      return { ...state, user: action.payload.user };
    }
    default:
      return state;
  }
};
