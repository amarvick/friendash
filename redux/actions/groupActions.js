import { group } from '../data_TEMP/group';
import { messages } from '../data_TEMP/messages';

export const getGroups = groupIds => {
  const groups = group.filter(g => groupIds.includes(g.id));
  let allGroups = [];
  groups.forEach(g => {
    let fullMessages = [];
    messages.forEach(m => {
      if (g.messages.includes(m.id)) {
        fullMessages.push(m);
      }
    });
    allGroups.push({
      ...g,
      messages,
    });
  });

  return allGroups;
}

export const setGroupsState = data => {
  return {
    type: 'SET_GROUPS',
    payload: data,
  }
}

export const addGroup = group => {
  return {
    type: 'ADD_GROUP',
    payload: group,
  }
};

export const removeGroup = groupID => {
  return {
    type: 'REMOVE_GROUP',
    payload: groupID,
  }
};