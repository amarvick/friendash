import { LOGIN_ACTION_TYPES } from './actiontypes';

export const loginReducer = (prevState, action) => {
  switch(action.type) {
    case LOGIN_ACTION_TYPES.RETRIEVE_TOKEN: 
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case LOGIN_ACTION_TYPES.LOGIN: 
      return {
        ...prevState,
        user: action.id,
        isLoading: false,
      };
    case LOGIN_ACTION_TYPES.LOGOUT: 
      return {
        ...prevState,
        userToken: null,
        user: null,
        isLoading: false,
      };
    case LOGIN_ACTION_TYPES.SIGNUP: 
      return {
        ...prevState,
        userToken: action.token,
        user: action.user,
        isLoading: false,
      };
  }
};