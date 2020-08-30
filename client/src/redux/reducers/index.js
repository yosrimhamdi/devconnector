import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import profiles from './profiles';

export default combineReducers({ profiles, form: reduxFormReducer });
