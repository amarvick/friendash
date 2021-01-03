import { user_group } from '../data_TEMP/user_group';
import { connections } from '../data_TEMP/connections';

export const getConnections = (id, groupIds) => {
  const connectionIds = user_group.map(ug => {
    if (groupIds.includes(ug.groupId) && ug.userId != id) {
      return ug.userId;
    }
  });

  return connections.filter(c => connectionIds.includes(c.id));
}

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