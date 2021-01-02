import { combineReducers } from 'redux';

import { calendarReducer } from './calendarReducer';
import { connectionsReducer } from './connectionsReducer';
import { groupReducer } from './groupReducer';
import { loginReducer } from './loginReducer';
import { queriedUsersReducer } from './queriedUsersReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  calendarReducer,
  connectionsReducer,
  groupReducer,
  loginReducer,
  queriedUsersReducer,
  userReducer,
});