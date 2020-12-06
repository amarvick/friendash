import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProfileScreen = (user) => {
  const { name } = user.route.params.user;
  return (
    <View style={styles.container}>
      <Text style={styles.linkText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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

export default ProfileScreen;