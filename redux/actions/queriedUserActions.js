import { queriedUsers } from '../data_TEMP/queried_users';

export const getQueried = queriedIds => {
  return queriedUsers.filter(
    user => queriedIds.includes(user.id)
  ).map(user => {
    return {
      ...user,
      connectionStatus: 'NOT_CONNECTED'
    }
  });
}

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