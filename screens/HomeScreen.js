import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class HomeScreen extends React.Component {
  _logOut = async () => {
    try {
      AsyncStorage.clear();
      this.props.navigation.navigate('Auth', { screen: 'LoginScreen' });
    } catch (e) {
      alert('error')
      console.log(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this._logOut}
        >
          <Text style={styles.linkText}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#65c2f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  linkText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#051d5f',
  },
});

export default HomeScreen;