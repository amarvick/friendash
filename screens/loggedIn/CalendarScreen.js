import React from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CalendarEvent from '../../components/CalendarEvent';
import EmptyState from '../../components/EmptyState';

const CalendarScreen = (props) => {
  return props.user.calendar.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {props.user.calendar.map((scheduledEvent, i) => {
          return (
            <TouchableOpacity key={`calendar-event-${i}`} onPress={() => props.navigation.navigate('ScheduledEventInfo', { scheduledEvent })}>
              <CalendarEvent
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
    user: state.loginReducer.user || [],
  }
}

export default connect(
  mapStateToProps,
  {},
)(CalendarScreen);