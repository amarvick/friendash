import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import FormButton from '../../components/FormButton';
import Icon from 'react-native-vector-icons/Ionicons';

const ScheduledEventInfoScreen = (event) => {
  let { name, location } = event.route.params.user;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.headerImage} source={require('../../assets/running.png')} />
        <Text style={styles.name}>{name}</Text>
        <View style={styles.headerDetails}>
          <Icon name="md-locate" size={30} /><Text style={styles.headerDetailsText}>{location}</Text>
        </View>
      </View>
      <View style={styles.bodyDetails}>
        <Text>Detail 1</Text>
        <Text>Detail 2</Text>
        <Text>Detail 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: '#b0d6f5',
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  headerDetailsText: {
    fontSize: 18,
    marginLeft: 10,
  },
  bodyDetails: {
    // justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ScheduledEventInfoScreen;