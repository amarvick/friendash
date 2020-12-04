import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerContent } from './screens/loggedIn/DrawerContent';
import RootStackScreen from './screens/loggedOut/RootStackScreen';
import MainTabScreen from './screens/loggedIn/MainTabScreen';
import ProfileScreen from './screens/loggedIn/ProfileScreen';
import EditProfileScreen from './screens/loggedIn/EditProfileScreen';
import ContactScreen from './screens/loggedIn/ContactScreen';
import SubscriptionScreen from './screens/loggedIn/SubscriptionScreen';

import { LOGIN_ACTION_TYPES } from './redux/actionTypes/loginActionTypes';
import { connect } from 'react-redux';

const Drawer = createDrawerNavigator();

const Main = (props) => {
  useEffect(() => {
    setTimeout(async() => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: LOGIN_ACTION_TYPES.RETRIEVE_TOKEN, token: userToken });
    }, 1000);
  }, []);

  if (props.loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <NavigationContainer>
      {
        props.loginState.userId !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={MainTabScreen} />
            <Drawer.Screen name="ViewProfile" component={ProfileScreen} />
            <Drawer.Screen name="EditProfile" component={EditProfileScreen} />
            <Drawer.Screen name="ContactUs" component={ContactScreen} />
            <Drawer.Screen name="Subscription" component={SubscriptionScreen} />
          </Drawer.Navigator>
        ) : <RootStackScreen />
      }
    </NavigationContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    loginState: state.loginReducer || [],
  }
}

const ConnectedMain = connect(
  mapStateToProps,
  {}
)(Main);

export default ConnectedMain;