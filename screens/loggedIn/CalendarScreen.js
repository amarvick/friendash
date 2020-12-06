import React from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CalendarEvent from '../../components/CalendarEvent';
import EmptyState from '../../components/EmptyState';

const CalendarScreen = (props) => {
  return props.user.calendar.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {props.user.calendar.map(e => {
          return (
            <TouchableOpacity onPress={() => props.navigation.navigate('ScheduledEventInfo', { e })}>
              <CalendarEvent
                eventName={e.eventName}
                date={e.date}
                time={e.time}
                location={e.location}
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