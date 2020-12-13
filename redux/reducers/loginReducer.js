import { LOGIN_ACTION_TYPES } from '../actionTypes/loginActionTypes';

const initialState = {
  user: '',
  token: '',
  isLoading: false,
};

export const loginReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case 'SET_LOGIN_STATE':
      return {
        ...state,
        ...payload, // this is what we expect to get back from API call and login page input
        isLoggedIn: true, // we set this as true on login - but this is likely not needed
      };
    case 'SET_LOGIN_USER_INFO': 
      return {
        ...state,
        user: {
          ...state.user,
          aboutMe: payload.aboutMe,
          pace: payload.pace,
          trainingFor: payload.trainingFor,
        },
      };
    default:
      return state;
  }
};