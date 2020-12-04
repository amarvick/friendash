import LOGIN_ACTION_TYPES from '../actionTypes/loginActionTypes';
import { Alert } from 'react-native';

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
      try {
        const payload = {
          token: '123',
          userId: email
        };
        setLoginLocal(payload); // storing in local storage for next launch
        dispatch(setLoginState(payload)); // our action is called here
      } catch (e) {
        Alert.alert('login failed, sorry');
      }
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      setLoginLocal({});
      dispatch(setLoginState({}));
    } catch (e) {
      Alert.alert('logout failed, sorry');
    }
  };
};