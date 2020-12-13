import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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

export const update = (data) => {
  return async (dispatch) => {
    try {
      setLoginLocal(data);
      dispatch(setLoginState(data));
    } catch (e) {
      // Alert.alert('logout failed, sorry');
      Alert.alert(JSON.stringify(e));
    }
  };
};