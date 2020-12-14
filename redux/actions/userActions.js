import { Alert } from 'react-native';

export const setUserState = (data) => {
  return {
    type: 'SET_USER',
    payload: data,
  }
}

const updateUserState = (data) => {
  return {
    type: 'UPDATE_ABOUT_USER',
    payload: data,
  }
}


export const update = (data) => {
  return async (dispatch) => {
    try {
      dispatch(updateUserState(data.info));
      Alert.alert('saved');
    } catch (e) {
      Alert.alert('updating failed: ' + JSON.stringify(e));
    }
  };
};