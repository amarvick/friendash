const initialState = {
  user: {},
};

export const userReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case 'SET_USER':
      return {
        user: action.payload
      };
    case 'UPDATE_ABOUT_USER':
      return {
        user: {
          ...state.user,
          aboutMe: payload.aboutMe,
          pace: payload.pace,
          trainingFor: payload.trainingFor,
        }
      };
    default:
      return state;
  }
};