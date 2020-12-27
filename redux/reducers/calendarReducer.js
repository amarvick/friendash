import moment from 'moment';

const initialState = {
  calendarEvents: [],
  /*
    You should consider making this a mapping between Calendar IDs => Calendar Events instead
    of an array. That way, it's significantly more efficient to update any calendar event on 
    the list because looping through the ID's in the map (the keys) in order to grab the event 
    you want is a lot faster than looping through every individual calendar event object, and
    the added space complexity is very minimal. You don't have to do this now, but at some point
    it will make the app a lot faster.
  */
};

export const calendarReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case 'SET_CALENDAR_EVENTS':
      return {
        calendarEvents: payload
      };
    case 'ADD_CALENDAR_EVENT':
      return {
        calendarEvents: [...state.calendarEvents, {
          ...payload,
          date: `${moment(payload.date).format('M/DD/YYYY')}`,
          id: Math.random() * 1000000
        }]
      };
    case 'EDIT_CALENDAR_EVENT':
      return {
        calendarEvents: state.calendarEvents.map(c => {
          if (c.id == payload.id) {
            c = payload;
          }
          return c;
        }),
      }
    case 'DELETE_CALENDAR_EVENT':
      return calendarEvents;
    default:
      return state;
  }
};