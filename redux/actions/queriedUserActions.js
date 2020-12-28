export const setQueriedUsersState = data => {
  return {
    type: 'SET_QUERIED_USERS',
    payload: data,
  }
}

export const removeQueriedUser = userID => {
  return {
    type: 'REMOVE_QUERIED_USER',
    payload: userID,
  }
};