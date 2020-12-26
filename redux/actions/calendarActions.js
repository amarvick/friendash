export const setCalendarEventState = data => {
  return {
    type: 'SET_CALENDAR_EVENTS',
    payload: data
  }
};

export const addEvent = newEvent => {
  return {
    type: 'ADD_CALENDAR_EVENT',
    payload: newEvent,
  }
};

export const editEvent = currentEvent => {
  return {
    type: 'EDIT_CALENDAR_EVENT',
    payload: currentEvent,
  }
};