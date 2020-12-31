import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { user } from '../data_TEMP/user';
import { calendar_user } from '../data_TEMP/calendar_user';
import { calendar } from '../data_TEMP/calendar';
import { connections } from '../data_TEMP/connections';
import { queriedUsers } from '../data_TEMP/queried_users';

import { setUserState } from './userActions';
import { setCalendarEventState } from './calendarActions';
import { setConnectionsState } from './connectionsActions';
import { setQueriedUsersState } from './queriedUserActions';

const userInfo = {
  email: 'alex@friendash.com',
  password: 'password',
}

// Temporary - will remove this once backend is set up
const getEvents = id => {
  const calendarUserEventsIDs = calendar_user.map(cu => {
    if (cu.userId == id) {
      return cu.calendarId
    }
  });
  return calendar.filter(c => calendarUserEventsIDs.includes(c.id));
}

// This will probably be a M-M relationship like the calendar -- ask Michael?
const getConnections = id => {
  return connections;
}

const getQueried = queriedIds => {
  return queriedUsers.filter(user => queriedIds.includes(user.id));
}

const setLoginState = (loginData) => {
  return {
    type: 'SET_LOGIN_STATE',
    payload: loginData,
  };
};

const setLoginLocal = async (loginData) => {
  try {
    await AsyncStorage.setItem('loginData', JSON.stringify(loginData));
  } catch (err) {
    console.log(err);
  }
};

const setFullUserState = (dispatch, payload, events, connections, queried, user) => {
  setLoginLocal(payload);
  dispatch(setLoginState(payload));
  dispatch(setCalendarEventState(events));
  dispatch(setConnectionsState(connections));
  dispatch(setQueriedUsersState(queried));
  dispatch(setUserState(user));
}

export const login = (loginInput) => {
  const { email, password } = loginInput;
  return async (dispatch) => {
    if (email === userInfo.email && password === userInfo.password) {
      try {
        const payload = {
          token: '123',
          user: user.id
        };
        setFullUserState(dispatch, payload, getEvents(user.id), getConnections(user.id), getQueried(user.queriedUsers), user);
      } catch (e) {
        Alert.alert('login failed, sorry');
      }
    }
  };
};

export const getStorageDataOnLoad = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setLoginState(data));
    } catch (e) {
      Alert.alert('Failed to load user info: ' + JSON.stringify(e));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const payload = {
        token: '',
        user: '',
      };
      setFullUserState(dispatch, payload, [], [], [], {});
    } catch (e) {
      Alert.alert('logout failed: ' + JSON.stringify(e));
    }
  };
};