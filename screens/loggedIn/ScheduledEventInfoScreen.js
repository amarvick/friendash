import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FormButton from '../../components/FormButton';
import Icon from 'react-native-vector-icons/Ionicons';

const ScheduledEventInfoScreen = (event) => {
  let { id, eventName, date, time, location, status } = event.route.params.scheduledEvent;
  const cancelEvent = () => {
    alert("Are you sure you want to cancel? This cannot be undone. Please make sure your party knows you plan to cancel.")
    // change on back end
    status = 'Cancelled';
  }

  const [data, setData] = React.useState({
    isEditing: false,
    eventName,
    date,
    time,
    location
  });

  const onChangeEventName = name => {
    setData({
      ...data,
      name,
    });
  }

  const onChangeEventDate = date => {
    setData({
      ...data,
      date,
    });
  }

  const onChangeEventTime = time => {
    setData({
      ...data,
      time,
    });
  }

  const onChangeEventLocation = location => {
    setData({
      ...data,
      location,
    });
  }

  let statusMessage = '';
  if (status == 'Cancelled') {
    statusMessage = 'This event has been cancelled';
  } else if (status == 'Pending') {
    statusMessage = 'Awaiting for other party to accept';
  } else if (status == 'Complete') {
    statusMessage = 'This is a past event';
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.eventTitle}>{eventName}</Text>
      </View>
      { status != 'Scheduled' ? <Text>
        {statusMessage}
      </Text> : null }
      <View style={styles.eventDetails}>
        <View style={styles.eventDetail}>
          <Icon name="md-calendar" size={30} /><Text style={styles.eventDetailText}>{date}</Text>
        </View>
        <View style={styles.eventDetail}>
          <Icon name="md-clock" size={30} /><Text style={styles.eventDetailText}>{time}</Text>
        </View>
        <View style={styles.eventDetail}>
          <Icon name="md-locate" size={30} /><Text style={styles.eventDetailText}>{location}</Text>
        </View>
      </View>
      {status != 'Cancelled' ? (
        <View style={styles.formButtons}>
          <FormButton buttonText="Edit Event" onPress={() => alert('Editing event details')} />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
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