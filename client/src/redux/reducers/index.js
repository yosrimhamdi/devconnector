import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import profilesReducer from './profilesReducer';
import authReducer from './authReducer';

export default combineReducers({
  profiles: profilesReducer,
  auth: authReducer,
  form: reduxFormReducer,
});
