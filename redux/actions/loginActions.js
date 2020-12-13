import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { user } from './user';
import { setUserState } from './userActions';

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

export const login = (loginInput) => {
  const { email, password } = loginInput;
  return async (dispatch) => {
    // fetch user
    if (email === userInfo.email && password === userInfo.password) {
      try {
        const payload = {
          token: '123',
          user: user.id
        };
        setLoginLocal(payload);
        dispatch(setLoginState(payload));
        dispatch(setUserState(user));
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
      const data = {
        token: '',
        user: '',
      };
      setLoginState(data);
      dispatch(setLoginState(data));
    } catch (e) {
      Alert.alert('logout failed: ' + JSON.stringify(e));
    }
  };
};