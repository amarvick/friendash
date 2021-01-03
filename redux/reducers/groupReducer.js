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
        groups: [...state.groups, {
          ...payload,
        }]
      };
    // case 'REMOVE_GROUP':
    //   return {
    //     groups: state.groups.map(g => {
    //       if (g.id == payload.id) {
    //         g = payload;
    //       }
    //       return g;
    //     }),
    //   }
    default:
      return state;
  }
};