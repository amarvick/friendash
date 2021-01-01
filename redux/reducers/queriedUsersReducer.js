const initialState = {
  queriedUsers: [],
};

export const queriedUsersReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case 'SET_QUERIED_USERS':
      return {
        queriedUsers: payload
      };
    case 'REMOVE_QUERIED_USER':
      let queriedUsers = state.queriedUsers;
      queriedUsers.splice(payload, 1);
      return {
        queriedUsers,
      };
    default:
      return state;
  }
};