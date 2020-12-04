import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const CalendarEvent = ({ eventName, date, time, location, ...props }) => {
  return (
    <View style={styles.container}>
      <Text>{eventName}</Text>
      <Text>{date} • {time}</Text>
      <Text>{location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 25,
    width: windowWidth / 1.1,
    height: windowHeight / 10,
    borderColor: '#b0d6f5',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#fff',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalendarEvent;