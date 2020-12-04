import LOGIN_ACTION_TYPES from '../actionTypes/loginActionTypes';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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
    if (email === userInfo.email && password === userInfo.password) {
      const user = {
        'name': 'Alex Marvick',
        'email': 'alex@friendash.com',
        'calendar': [
          {
            'eventName': 'Run with Michael',
            'date': 'April 15, 2021',
            'time': '4:00PM PST',
            'location': 'Greenlake',
          },
          {
            'eventName': 'Run with Nick',
            'date': 'April 15, 2021',
            'time': '4:00PM PST',
            'location': 'Sammamish',
          },
          {
            'eventName': 'Run with Gavin',
            'date': 'April 15, 2021',
            'time': '4:00PM PST',
            'location': 'Greenlake',
          },
          {
            'eventName': 'Run with Lorenzo',
            'date': 'April 15, 2021',
            'time': '4:00PM PST',
            'location': 'Ballard',
          }
        ]
      }
      try {
        const payload = {
          token: '123',
          user: user
        };
        setLoginLocal(payload);
        dispatch(setLoginState(payload));
      } catch (e) {
        Alert.alert('login failed, sorry');
      }
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
      setLoginLocal(data);
      dispatch(setLoginState(data));
    } catch (e) {
      // Alert.alert('logout failed, sorry');
      Alert.alert(JSON.stringify(e));
    }
  };
};