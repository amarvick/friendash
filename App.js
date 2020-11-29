import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import React, { useEffect, useState, useMemo } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/root/RootStackScreen';
import HomeScreen from './screens/HomeScreen';

import { AuthContext } from './components/context';

const Drawer = createDrawerNavigator();

const App = () => {
  const userInfo = {
    email: 'alex@friendash.com',
    password: 'password',
  }

  // Put in to redux folder eventually? :)
  const initialLoginState = { 
    isLoading: true, 
    user: null, 
    userToken: null, 
  }

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          user: action.id,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userToken: null,
          user: null,
          isLoading: false,
        };
      case 'SIGNUP': 
        return {
          ...prevState,
          userToken: action.token,
          user: action.user,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(email, password) => {
      const userToken = 'asdf'
      if (email === userInfo.email && password === userInfo.password) {
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch(e) {
          console.log(e);
        }
      }

      dispatch({ type: 'LOGIN', id: email, token: userToken });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('asdfae');
      // setIsLoading(false);
    },
  }))

  useEffect(() => {
    setTimeout(async() => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  alert(loginState.user);
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {
          loginState.userToken != null ? (
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