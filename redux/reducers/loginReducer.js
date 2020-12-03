import { initialState } from '../initialState';
import LOGIN_ACTION_TYPES from '../actionTypes/loginActionTypes';

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION_TYPES.SET_LOGIN_STATE:
      return {
        ...state,
        ...action.payload, // this is what we expect to get back from API call and login page input
        isLoggedIn: true, // we set this as true on login
      };
    default:
      return state;
  }
};