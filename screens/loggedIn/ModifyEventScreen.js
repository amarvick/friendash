import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { windowHeight } from '../../utils/Dimensions';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/Ionicons';

const ModifyEventScreen = (props) => {
  const eventDetails = props.route.params.eventDetails ?? {};
  const [data, setData] = React.useState({
    eventName: eventDetails.eventName ?? '',
    date: new Date(eventDetails.date) ?? '',
    time: eventDetails.time ?? '',
    location: eventDetails.location ?? '',
    status: eventDetails.status ?? '',
  });

  const onChangeEventName = eventName => {
    setData({
      ...data,
      eventName,
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

  const onCheckErrors = () => {
    if (data.eventName == '') {
      alert('Please insert a name')
      return true;
    } else if (data.date == '') {
      alert('Please insert a date')
      return true;
    } else if (data.time == '') {
      alert('Please insert a time')
      return true;
    } else if (data.location == '') {
      alert('Please insert a location')
      return true;
    }

    return false;
  }

  const onEditEvent = () => {
    if (!onCheckErrors()) {
      alert('editing event');
    }
  }

  const onAddEvent = () => {
    if (!onCheckErrors) {
      alert('adding event');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.eventTitle}>Editing event: {eventDetails.eventName}</Text>
      </View>
      <View style={styles.eventDetails}>
        <FormInput
          labelValue={data.eventName}
          onChangeText={eventName => onChangeEventName(eventName)}
          placeholderText="Name of event..."
          iconType="md-create"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <DatePicker
          date={new Date()}
          style={styles.datePicker}
          mode="date"
          placeholder="Select Date"
          format="MM-DD-YYYY"
          minDate="2016-05-01"
          maxDate="2020-06-01"
          confirmBtnText="Set"
          cancelBtnText="Cancel"
          iconComponent={
            <Icon
              style={styles.icon}
              name='md-calendar'
            />
          }
          onDateChange={date => onChangeEventDate(date)}
          customStyles={{
            dateInput: styles.dateInput
          }}
        />

        <DatePicker
          date={data.time}
          style={styles.datePicker}
          mode="time"
          placeholder="Select Time"
          format="h:mm A"
          confirmBtnText="Set"
          cancelBtnText="Cancel"
          iconComponent={
            <Icon
              style={styles.icon}
              name='md-clock'
            />
          }
          onDateChange={time => onChangeEventTime(time)}
          customStyles={{
            dateInput: styles.dateInput
          }}
        />

        <FormInput
          labelValue={data.location}
          onChangeText={location => onChangeEventLocation(location)}
          placeholderText="Location"
          iconType="md-pin"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormButton
          buttonText="Save"
          onPress={
            eventDetails != {} ? 
              () => onEditEvent() :
              () => onAddEvent()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
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
  eventDetails: {
    fontSize: 22,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    marginVertical: 10,
  },
  datePicker: {
    marginTop: 5,
    marginBottom: 10,
    width: '85%',
    height: windowHeight / 20,
    borderColor: '#b0d6f5',
    borderRadius: 25,
    borderWidth: 1,
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
  icon: {
    width: '100%',
    padding: 10,
    marginLeft: 12, // change this
    fontSize: 25,
    color: '#65c2f5'
  },
  dateInput: {
    borderWidth: 0,
    left: 62, // change this... :\ 
    position: 'absolute',
  },
  formButtons: {
    alignItems: 'center',
    width: '85%',
    marginBottom: 10,
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateCalendarEvent: (info) => dispatch(updateCalendarEvent(info))
  }
}

export default connect(
  {},
  mapDispatchToProps,
)(ModifyEventScreen);