export const setCalendarEventState = data => {
  return {
    type: 'SET_CALENDAR_EVENTS',
    payload: data
  }
};

export const addEvent = newEvent => {
  return async (dispatch) => {
    dispatch({
      type: 'ADD_CALENDAR_EVENT',
      payload: newEvent,
    });
  }
};

export const editEvent = currentEvent => {
  return async (dispatch) => {
    dispatch({
      type: 'EDIT_CALENDAR_EVENT',
      payload: currentEvent,
    });
  }
};

export const cancelEvent = eventID => {
  return {
    type: 'DELETE_CALENDAR_EVENT',
    payload: eventID,
  }
};