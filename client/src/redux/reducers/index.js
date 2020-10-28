import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import profilesReducer from './profilesReducer';
import authReducer from './authReducer';
import errorReducer from './errorsReducer';
import loadingReducer from './loadingReducer';
import postsReducer from './postsReducer';
import likesReducer from './likesReducer';
import commentsReducer from './commentsReducer';
import initialMountReducer from './initialMountReducer';

export default combineReducers({
  auth: authReducer,
  profiles: profilesReducer,
  errors: errorReducer,
  form: reduxFormReducer,
  loading: loadingReducer,
  posts: postsReducer,
  likes: likesReducer,
  comments: commentsReducer,
  initialMount: initialMountReducer,
});
