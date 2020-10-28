import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_PHOTO,
  FETCH_USER_PROFILE,
  ADD_EXPERIENCE,
  ADD_EDUCATION,
  REMOVE_EXPERIENCE,
  REMOVE_EDUCATION,
  UPDATE_PROFILE,
  CREATE_PROFILE,
} from '../actions/types';

const INITIAL = {
  isAuthenticated: false,
  user: null,
  profile: null,
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return { ...state, user: action.payload.user, isAuthenticated: true };
    case LOGOUT_USER:
      return { ...state, user: null, isAuthenticated: false, profile: null };
    case UPDATE_PHOTO: {
      return { ...state, user: action.payload.user };
    }
    case FETCH_USER_PROFILE:
    case CREATE_PROFILE:
    case UPDATE_PROFILE:
    case ADD_EXPERIENCE:
    case ADD_EDUCATION:
    case REMOVE_EXPERIENCE:
    case REMOVE_EDUCATION:
      return { ...state, profile: action.payload.profile };
    default:
      return state;
  }
};
