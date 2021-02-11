import { calendar_user } from '../data_TEMP/calendar_user';
import { calendar } from '../data_TEMP/calendar';
import { connections } from '../data_TEMP/connections';

export const getEvents = id => {
  const calendarUserEventsIDs = calendar_user.map(cu => {
    if (cu.userId == id) {
      return cu.calendarId
    }
  }).filter(c => c != null);

  const calendarUserEventToUserIDs = {};
  calendar_user.map(cu => {
    if (cu.userId != id && calendarUserEventsIDs.includes(cu.calendarId)) {
      calendarUserEventToUserIDs[cu.calendarId] = cu.userId;
    }
  });

  const calendarUserEventToUsers = {};
  Object.keys(calendarUserEventToUserIDs).forEach(key => {
    connections.map(c => {
      if (calendarUserEventToUserIDs[key] == c.id) {
        calendarUserEventToUsers[key] = c.name;
      }
    })
  })

  let events = [];
  calendar.map(c => {
    if (calendarUserEventsIDs.includes(c.id)) {  
      events.push({
        ...c,
        attendee: calendarUserEventToUsers[c.id],
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