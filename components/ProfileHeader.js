import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ProfileHeader = ({name, location, isEditable}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.headerImage} source={require('../assets/running.png')} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.headerDetails}>
        <Image source={require('../assets/icons/Search.png')} style={styles.icons} />
        <Text style={styles.headerDetailsText}>{location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b0d6f5',
    alignItems: 'center',
    padding: 5,
  },
  icons: {
    width: 24, 
    height: 24,
  },
  headerImage: {
    height: 125,
    width: 125,
    borderRadius: 100,
    borderWidth: 1,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerDetails: {
    fontSize: 22,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  headerDetailsText: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default ProfileHeader;