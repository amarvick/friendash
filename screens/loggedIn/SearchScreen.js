import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AuthContext } from '../../components/context';

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {}}
      >
        <Text style={styles.linkText}>Search Screen</Text>
      </TouchableOpacity>
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

export default SearchScreen;