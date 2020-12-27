import { Alert } from 'react-native';

export const setUserState = data => {
  return {
    type: 'SET_USER',
    payload: data,
  }
}

export const update = data => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'UPDATE_ABOUT_USER',
        payload: data.info,
      });
      Alert.alert('Saved!');
    } catch (e) {
      Alert.alert('updating failed: ' + JSON.stringify(e));
    }
  };
};