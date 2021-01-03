import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { user } from '../data_TEMP/user';

import { setUserState } from './userActions';
import { setCalendarEventState, getEvents } from './calendarActions';
import { setConnectionsState, getConnections } from './connectionsActions';
import { setQueriedUsersState, getQueried } from './queriedUserActions';
import { setGroupsState, getGroups, getGroupIds } from './groupActions';

const userInfo = {
  email: 'alex@friendash.com',
  password: 'password',
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

const setFullUserState = (dispatch, payload, events, connections, groups, queried, user) => {
  setLoginLocal(payload);
  dispatch(setLoginState(payload));
  dispatch(setCalendarEventState(events));
  dispatch(setConnectionsState(connections));
  dispatch(setGroupsState(groups));
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

        const groupIds = getGroupIds(user.id);
        setFullUserState(
          dispatch, 
          payload, 
          getEvents(user.id), 
          getConnections(user.id, groupIds), 
          getGroups(groupIds),
          getQueried(user.queriedUsers), 
          user
        );
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
      setFullUserState(dispatch, payload, [], [], [], [], {});
    } catch (e) {
      Alert.alert('logout failed: ' + JSON.stringify(e));
    }
  };
};