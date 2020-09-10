import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import profilesReducer from './profilesReducer';
import authReducer from './authReducer';
import errorReducer from './errorsReducer';
import loadingReducer from './loadingReducer';
import postsReducers from './postsReducer';

export default combineReducers({
  auth: authReducer,
  profiles: profilesReducer,
  errors: errorReducer,
  form: reduxFormReducer,
  loading: loadingReducer,
  posts: postsReducers,
});
