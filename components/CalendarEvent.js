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
        status == 'Cancelled' ? styles.cancelledHeader : styles.nonCancelledHeader
      ]}>
        <Text style={styles.headerText}>
          {`${status == 'Cancelled' ? '* CANCELLED *' : ''} ${eventName}`}
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Image style={styles.contactImage} source={require('../assets/running.png')} />
        </View>
        <View style={styles.bodyContent}>
          <Text style={{ ...styles.bodyText, fontSize: 22 }}>{location}</Text>
          <Text style={styles.bodyText}>{date} • {time}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
    elevation: 3,
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
    justifyContent: 'center',
    backgroundColor: '#65c2f5',
    width: '100%',
    padding: 10,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    margin: 0
  },
  nonCancelledHeader: {
    backgroundColor: '#65c2f5',
  },
  cancelledHeader: {
    backgroundColor: '#464646',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyContent: {
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  bodyText: {
    top: 5,
    paddingVertical: 20,
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