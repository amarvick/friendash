import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }

  _loadData = async() => {
    const user = await AsyncStorage.getItem('user');
    this.props.navigation.navigate(user != null ? 'App' : 'Auth');
  }

  render() {
    return(
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default"/>
      </View>
    )
  }
}

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
));

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#65c2f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});