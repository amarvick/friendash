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

const setUserLocal = async (updatedUserData) => {
  try {
    await AsyncStorage.getItem('loginData')
      .then(async loginData => {
        const newData = {
          ...loginData,
          user: {
            ...loginData.user,
            aboutMe: updatedUserData.aboutMe,
            pace: updatedUserData.pace,
            trainingFor: updatedUserData.trainingFor
          }
        }

        await AsyncStorage.setItem('loginData', JSON.stringify(newData))
      });
  } catch (err) {
    console.log(err);
  }
}

const setUserState = (data) => {
  return {
    type: 'SET_LOGIN_USER_INFO',
    payload: data.info,
  }
}

export const login = (loginInput) => {
  const { email, password } = loginInput;
  return async (dispatch) => {
    if (email === userInfo.email && password === userInfo.password) {
      const user = {
        'id': 16,
        'name': 'Alex Marvick',
        'email': 'alex@friendash.com',
        'location': 'Seattle, WA',
        'aboutMe': 'My name is Alex and I\'m the founder of this app. Looking to meet runners in the area!',
        'pace': '7:30-8:30 min/mile',
        'trainingFor': [
          'Fun',
          'Mid-distance races (400m - 3200m)',
          'Long-distance races (3200m - 10k)',
          'Half Marathons',
          'Full Marathons',
          'Ultra Marathons',
        ],
        'calendar': [
          {
            'id': 0,
            'eventName': 'Run with Michael',
            'date': 'April 15, 2021',
            'time': '4:00PM PST',
            'location': 'Greenlake',
            'with': 10,
            'status': 'Scheduled'
          },
          {
            'id': 1,
            'eventName': 'Run with Nick',
            'date': 'April 15, 2021',
            'time': '4:00PM PST',
            'location': 'Sammamish',
            'with': 11,
            'status': 'Scheduled'
          },
          {
            'id': 2,
            'eventName': 'Run with Gavin',
            'date': 'April 15, 2021',
            'time': '4:00PM PST',
            'location': 'Greenlake',
            'with': 12,
            'status': 'Scheduled'
          },
          {
            'id': 3,
            'eventName': 'Run with Lorenzo',
            'date': 'April 15, 2021',
            'time': '4:00PM PST',
            'location': 'Ballard',
            'with': 13,
            'status': 'Cancelled'
          }
        ],
        'connections': [
          {
            'id': 9,
            'name': 'Regina',
            'location': 'Seattle, WA',
            'aboutMe': 'My name is Regina and I am a new runner. I hope to meet new runners who are up for a good time!',
            'pace': '10 min/mile',
            'trainingFor': [
              'Fun'
            ],
            'connected': true,
          },
          {
            'id': 10,
            'name': 'Michael',
            'location': 'Seattle, WA',
            'aboutMe': 'My name is Michael and I am a new runner. I hope to meet new runners who are up for a good time!',
            'pace': '10 min/mile',
            'trainingFor': [
              'Fun'
            ],
            'connected': true,
          },
          {
            'id': 11,
            'name': 'Nick',
            'location': 'Seattle, WA',
            'aboutMe': 'My name is Nick and I am a new runner. I hope to meet new runners who are up for a good time!',
            'pace': '10 min/mile',
            'trainingFor': [
              'Fun'
            ],
            'connected': true,
          },
          {
            'id': 12,
            'name': 'Gavin',
            'location': 'Seattle, WA',
            'aboutMe': 'My name is Gavin and I am a new runner. I hope to meet new runners who are up for a good time!',
            'pace': '10 min/mile',
            'trainingFor': [
              'Fun'
            ],
            'connected': true,
          },
          {
            'id': 13,
            'name': 'Lorenzo',
            'location': 'Seattle, WA',
            'aboutMe': 'My name is Lorenzo and I am a new runner. I hope to meet new runners who are up for a good time!',
            'pace': '10 min/mile',
            'trainingFor': [
              'Fun'
            ],
            'connected': true,
          }
        ],
        'queried': [
          {
            'id': 14,
            'name': 'Matt',
            'location': 'San Carlos, CA',
            'aboutMe': 'My name is Matt and I am a new runner. I hope to meet new runners who are up for a good time!',
            'pace': '10 min/mile',
            'trainingFor': [
              'Fun'
            ],
            'connected': false,
          },
          {
            'id': 15,
            'name': 'Freddy',
            'location': 'San Francisco, CA',
            'aboutMe': 'My name is Freddy and I am a new runner. I hope to meet new runners who are up for a good time!',
            'pace': '10 min/mile',
            'trainingFor': [
              'Fun'
            ],
            'connected': false,
          },
          {
            'id': 16,
            'name': 'Miles',
            'location': 'Seattle, WA',
            'aboutMe': 'My name is Miles and I am a new runner. I hope to meet new runners who are up for a good time!',
            'pace': '10 min/mile',
            'trainingFor': [
              'Fun'
            ],
            'connected': false,
          },
          {
            'id': 17,
            'name': 'Zack',
            'location': 'Lakewood, WA',
            'aboutMe': 'My name is Zack and I am a new runner. I hope to meet new runners who are up for a good time!',
            'pace': '10 min/mile',
            'trainingFor': [
              'Fun'
            ],
            'connected': false,
          },
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

export const update = (data) => {
  return async (dispatch) => {
    try {
      // setLoginLocal(data);
      dispatch(setUserState(data));
      Alert.alert('saved');
    } catch (e) {
      // Alert.alert('logout failed, sorry');
      Alert.alert(JSON.stringify(e));
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