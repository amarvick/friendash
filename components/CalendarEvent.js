import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const CalendarEvent = ({ eventName, date, time, location, status }) => {
  return (
    <View style={[
      styles.container,
      status == 'Cancelled' ? styles.cancelledContainer : styles.nonCancelledContainer
    ]}>
      <View style={[
        styles.header,
        { backgroundColor: status == 'Cancelled' ? '#464646' : '#65c2f5' }
      ]}>
        <Text numberOfLines={1} style={styles.headerText}>
          {`${status == 'Cancelled' ? '* CANCELLED *' : ''} ${eventName}`}
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Image style={styles.contactImage} source={require('../assets/running.png')} />
        </View>
        <View style={styles.bodyContent}>
          <Text numberOfLines={1} style={{ ...styles.bodyText, fontSize: 22 }}>{location}</Text>
          <Text numberOfLines={1} style={styles.bodyText}>{date} • {time}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    width: windowWidth / 1.1,
    height: windowHeight / 5,
    borderRadius: 5,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  nonCancelledContainer: {
    borderColor: '#65c2f5',
    backgroundColor: '#0c81c0',
  },
  cancelledContainer: {
    borderColor: '#DBDBDB',
    backgroundColor: '#DBDBDB',
  },
  header: {
    backgroundColor: '#65c2f5',
    width: '100%',
    padding: 10,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: 'hidden',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  body: {
    flexDirection: 'row',
    marginHorizontal: 20,
    top: 12,
  },
  bodyContent: {
    justifyContent: 'center',
  },
  bodyText: {
    top: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  contactImage: {
    height: 100,
    width: 100,
    borderColor: '#65c2f5',
    borderRadius: 100,
    borderWidth: 1,
    top: 5,
  },
});

export default CalendarEvent;