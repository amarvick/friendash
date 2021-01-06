const initialState = {
  connections: [],
};

export const connectionsReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case 'SET_CONNECTIONS':
      return {
        connections: payload
      };
    case 'ADD_CONNECTION':
      return {
        connections: [...state.connections, payload]
      };
    case 'EDIT_CONNECTION':
      return {
        connections: state.connections.map(c => {
          if (c.id == payload.id) {
            c = payload;
          }
          return c;
        }),
      };
    case 'REMOVE_CONNECTION':
      return {
        connections: state.connections.splice(payload, 1)
      };
    default:
      return state;
  }
};