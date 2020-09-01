import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import profilesReducer from './profilesReducer';
import authReducer from './authReducer';
import errorReducer from './errorsReducer';

export default combineReducers({
  profiles: profilesReducer,
  auth: authReducer,
  form: reduxFormReducer,
  errors: errorReducer,
});
