import { groups } from '../data_TEMP/group';
import { user_group } from '../data_TEMP/user_group';
import { messages } from '../data_TEMP/messages';

export const getGroupIds = id => {
  let user_groups = user_group.map(ug => {
    if (ug.userId == id) {
      return ug.groupId;
    }
  });

  return user_groups.filter(ug => ug != null)
}

export const getGroups = groupIds => {
  let theGroups = groups.filter(g => groupIds.includes(g.id));
  let allGroups = [];
  theGroups.forEach((g, i) => {
    let fullMessages = [];
    messages.forEach(m => {
      if (g.messages.includes(m.id)) {
        fullMessages.push(m);
      }
    });
    allGroups.push({
      ...g,
      connectionId: i + 17,
      messages: fullMessages,
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

// export const removeGroup = groupID => {
//   return {
//     type: 'REMOVE_GROUP',
//     payload: groupID,
//   }
// };