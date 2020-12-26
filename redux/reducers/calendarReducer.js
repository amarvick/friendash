const initialState = {
  calendarEvents: [],
};

export const calendarReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case 'SET_CALENDAR_EVENTS':
      return {
        calendarEvents: action.payload
      };
    case 'ADD_CALENDAR_EVENT':
      return {
        calendarEvents: state.calendarEvents.push(action.payload)
      };
    case 'EDIT_CALENDAR_EVENT':
      return {
        calendarEvents: {
          ...state.user,
          aboutMe: payload.aboutMe,
          pace: payload.pace,
          runFrequency: payload.runFrequency,
          preferredLocations: payload.preferredLocations,
          trainingFor: payload.trainingFor,
        }
      };
      default:
        return state;
  }
};