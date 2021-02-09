import React from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CalendarEvent from '../../components/CalendarEvent';
import EmptyState from '../../components/EmptyState';
import moment from 'moment';

const CalendarScreen = (props) => {
  return props.calendar.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {props.calendar.sort(function (a, b) {
          return moment(a.date + " " + a.time) - moment(b.date + " " + b.time);
        }).map((scheduledEvent, i) => {
          return (
            <TouchableOpacity key={`calendar-event-${i}`} onPress={() => props.navigation.navigate('ScheduledEventInfo', { scheduledEvent })}>
              <CalendarEvent
                attendee={scheduledEvent.attendee}
                eventName={scheduledEvent.eventName}
                date={scheduledEvent.date}
                time={scheduledEvent.time}
                location={scheduledEvent.location}
                status={scheduledEvent.status}
              />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  ) : (
      <EmptyState
        photo={require('../../assets/running.png')}
        header="You have no events scheduled"
        subtitle="Schedule an event in the contacts tab, or the upper right corner"
      />
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    calendar: state.calendarReducer.calendarEvents || [],
  }
}

export default connect(
  mapStateToProps,
  {},
)(CalendarScreen);