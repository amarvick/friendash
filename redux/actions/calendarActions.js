import { calendar_user } from '../data_TEMP/calendar_user';
import { calendar } from '../data_TEMP/calendar';

// Temporary - don't optimize this too much, SQL will do this better :)
export const getEvents = id => {
  const calendarUserEventsIDs = calendar_user.map(cu => {
    if (cu.userId == id) {
      return cu.calendarId
    }
  });

  // Returns calendar event ID to user ID; want 
  // to make this to the full user. Refer to connections
  const calendarUserEventToUser = {};
  calendar_user.map(cu => {
    if (cu.userId != id && calendarUserEventsIDs.includes(cu.calendarId)) {
      calendarUserEventToUser[cu.calendarId] = cu.userId;
    }
  });

  let events = []
  calendar.map(c => {
    if (calendarUserEventsIDs.includes(c.id)) {
      alert(calendarUserEventToUser[c.id]);
      events.push({
        ...c,
        attendee: calendarUserEventToUser[c.id].name,
      });
    };
  });
  return events;
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