import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CalendarEvent from '../../components/CalendarEvent';

const CalendarScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
      {props.user.calendar.map(e => {
        return (
          <TouchableOpacity>
            <CalendarEvent 
              eventName={e.eventName}
              date={e.date}
              time={e.time}
              location={e.location}
            />
          </TouchableOpacity>
      )})}
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

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user || [],
  }
}

export default connect(
  mapStateToProps,
  {},
)(CalendarScreen);