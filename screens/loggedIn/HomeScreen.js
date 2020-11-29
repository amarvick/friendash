import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AuthContext } from '../../components/context';

const HomeScreen = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => { signOut() }}
      >
        <Text style={styles.linkText}>Log out</Text>
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

export default HomeScreen;