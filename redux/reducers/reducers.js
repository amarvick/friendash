import { combineReducers } from 'redux';

import { calendarReducer } from './calendarReducer';
import { loginReducer } from './loginReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  calendarReducer,
  loginReducer,
  userReducer,
});