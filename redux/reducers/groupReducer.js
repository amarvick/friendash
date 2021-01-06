const initialState = {
  groups: [],
};

export const groupReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case 'SET_GROUPS':
      return {
        groups: payload
      };
    case 'ADD_GROUP':
      return {
        groups: [...state.groups, payload]
      };
    case 'ADD_MESSAGE_TO_GROUP':
      const groups = state.groups.map(g => {
        if (g.id == payload.groupId) {
          g.messages.push(payload.message);
        }
        return g;
      });
      return {
        groups,
      }
    case 'EDIT_GROUP':
      let group = state.groups.filter(g => g.id == payload.id);
      return {
        groups: [
          ...state.groups,
        ]
      }
    case 'REMOVE_GROUP':
      return {
        groups: state.groups.map(g => {
          if (g.id == payload.id) {
            g = payload;
          }
          return g;
        }),
      }
    default:
      return state;
  }
};