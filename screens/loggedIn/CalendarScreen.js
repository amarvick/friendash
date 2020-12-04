import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CalendarEvent from '../../components/CalendarEvent';

const CalendarScreen = (props) => {
  const screen = props.user.calendar.length > 0 ? props.user.calendar.map(e => {
    return (
      <TouchableOpacity>
        <CalendarEvent 
          eventName={e.eventName}
          date={e.date}
          time={e.time}
          location={e.location}
        />
      </TouchableOpacity>
  )}) : (
    <Text>You have no connections</Text>
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Calendar</Text>
      {screen}
    </ScrollView>
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