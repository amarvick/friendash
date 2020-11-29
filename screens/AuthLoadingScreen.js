import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#65c2f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthLoadingScreen;