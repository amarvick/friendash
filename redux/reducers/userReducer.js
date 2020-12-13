import { LOGIN_ACTION_TYPES } from '../actionTypes/loginActionTypes';

const initialState = {
  user: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        ...action.payload, // this is what we expect to get back from API call and login page input
        isLoggedIn: true, // we set this as true on login
      };
    default:
      return state;
  }
};