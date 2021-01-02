import { calendar_user } from '../data_TEMP/calendar_user';
import { calendar } from '../data_TEMP/calendar';

// Temporary
export const getEvents = id => {
  const calendarUserEventsIDs = calendar_user.map(cu => {
    if (cu.userId == id) {
      return cu.calendarId
    }
  });
  return calendar.filter(c => calendarUserEventsIDs.includes(c.id));
}

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