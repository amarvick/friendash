import React, { useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/loggedOut/RootStackScreen';
import HomeScreen from './screens/loggedIn/HomeScreen';
import { loginReducer } from './redux/reducers';
import { AuthContext } from './components/context';
import { LOGIN_ACTION_TYPES } from './redux/actiontypes';

const Drawer = createDrawerNavigator();

const App = () => {
  const userInfo = {
    email: 'alex@friendash.com',
    password: 'password',
  }

  // TO DO - try to put everything here + 33 lines down in actions.
  const initialLoginState = { 
    isLoading: true, 
    user: null, 
    userToken: null, 
  }
  
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  const authContext = React.useMemo(() => ({
    signIn: async(email, password) => {
      const userToken = 'asdf'
      if (email === userInfo.email && password === userInfo.password) {
        try {
          await AsyncStorage.setItem('userToken', userToken);
          dispatch({ type: LOGIN_ACTION_TYPES.LOGIN, id: email, token: userToken });
        } catch(e) {
          console.log(e);
        }
      }

    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: LOGIN_ACTION_TYPES.LOGOUT });
    },
    signUp: () => {
      // setUserToken('asdfae');
      // setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(async() => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: LOGIN_ACTION_TYPES.RETRIEVE_TOKEN, token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {
          loginState.userToken !== null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            </Drawer.Navigator>
          ) : <RootStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App;