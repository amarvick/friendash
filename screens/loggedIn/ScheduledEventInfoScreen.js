import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FormButton from '../../components/FormButton';
import Icon from 'react-native-vector-icons/Ionicons';

const ScheduledEventInfoScreen = (props) => {
  let eventDetails = props.route.params.scheduledEvent;
  const cancelEvent = () => {
    alert("Are you sure you want to cancel? This cannot be undone. Please make sure your party knows you plan to cancel.")
    // scheduledEvent.status = 'Cancelled';
  }

  let statusMessage = '';
  if (eventDetails.status == 'Cancelled') {
    statusMessage = 'This event has been cancelled';
  } else if (eventDetails.status == 'Pending') {
    statusMessage = 'Awaiting for other party to accept';
  } else if (eventDetails.status == 'Complete') {
    statusMessage = 'This is a past event';
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.eventTitle}>{eventDetails.eventName}</Text>
      </View>
      { eventDetails.status != 'Scheduled' ? <Text>
        {statusMessage}
      </Text> : null }
      <View style={styles.eventDetails}>
      <View style={styles.eventDetail}>
          <Icon name="md-person" size={30} /><Text style={styles.eventDetailText}>Someone</Text>
        </View>
        <View style={styles.eventDetail}>
          <Icon name="md-calendar" size={30} /><Text style={styles.eventDetailText}>{eventDetails.date}</Text>
        </View>
        <View style={styles.eventDetail}>
          <Icon name="md-clock" size={30} /><Text style={styles.eventDetailText}>{eventDetails.time}</Text>
        </View>
        <View style={styles.eventDetail}>
          <Icon name="md-locate" size={30} /><Text numberOfLines={1} style={styles.eventDetailText}>{eventDetails.location}</Text>
        </View>
      </View>
      {eventDetails.status != 'Cancelled' ? (
        <View style={styles.formButtons}>
          <FormButton buttonText="Edit Event" onPress={() => props.navigation.navigate('EditEvent', { eventDetails })} />
          <FormButton buttonText="Cancel Event" onPress={cancelEvent} />
        </View>
      ) : null}
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
  eventTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  eventDetail: {
    fontSize: 22,
    flexDirection: 'row',
    marginVertical: 10,
    width: '75%',
  },
  eventDetailText: {
    fontSize: 18,
    marginLeft: 20,
  },
  formButtons: {
    alignItems: 'center',
    width: '85%',
    marginBottom: 10,
  }
});

export default ScheduledEventInfoScreen;