export const setConnectionsState = data => {
  return {
    type: 'SET_CONNECTIONS',
    payload: data,
  }
}

export const addConnection = connection => {
  return {
    type: 'ADD_CONNECTION',
    payload: connection,
  }
};

export const removeConnection = userID => {
  return {
    type: 'REMOVE_CONNECTION',
    payload: userID,
  }
};