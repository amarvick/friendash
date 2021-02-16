import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { windowHeight } from '../../utils/Dimensions';
import { addEvent, editEvent } from '../../redux/actions/calendarActions';
import { connect } from 'react-redux';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import DatePicker from 'react-native-datepicker';

const ModifyEventScreen = (props) => {
  let eventDetails = {};
  let isEditing = false;
  if (props.route.params != null) {
    eventDetails = props.route.params.eventDetails;
    isEditing = true;
  }

  const [data, setData] = React.useState({
    eventName: eventDetails.eventName || '',
    attendee: eventDetails.attendee || '',
    date: eventDetails.date || new Date(),
    time: eventDetails.time || '',
    location: eventDetails.location || '',
    status: eventDetails.status || '',
  });

  const onChangeEventName = eventName => {
    setData({
      ...data,
      eventName,
    });
  }

  const onChangeEventAttendee = attendee => {
    setData({
      ...data,
      attendee,
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
      props.editEvent({
        ...data,
        id: eventDetails.id,
        date: `${data.date}`
      });
      alert('event edited');
    }
  }

  const onAddEvent = () => {
    if (!onCheckErrors()) {
      props.addEvent(data);
      alert('event added');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.eventTitle}>{
          isEditing
            ? `Editing Event: ${eventDetails.eventName}`
            : 'Adding Event'
        }</Text>
      </View>
      <View style={styles.eventDetailsStyles}>

        <FormInput
          labelValue={data.attendee}
          onChangeText={eventAttendee => onChangeEventAttendee(eventAttendee)}
          placeholderText="Choose attendee"
          iconType={require('../../assets/icons/Person.png')}
          editable={!isEditing}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={data.eventName}
          onChangeText={eventName => onChangeEventName(eventName)}
          placeholderText="Name of event..."
          iconType={require('../../assets/icons/Pencil.png')}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <DatePicker
          date={data.date}
          style={styles.datePicker}
          mode="date"
          placeholder="Select Date"
          format="M/DD/YYYY"
          confirmBtnText="Set"
          cancelBtnText="Cancel"
          iconComponent={
            <Image 
              source={require('../../assets/icons/Calendar.png')} 
              style={styles.icons} 
            />
          }
          onDateChange={date => onChangeEventDate(date)}
          customStyles={{
            dateInput: styles.dateInput
          }}
          useNativeDriver={true}
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
            <Image 
              source={require('../../assets/icons/Clock.png')} 
              style={styles.icons} 
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
          iconType={require('../../assets/icons/Location.png')}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormButton
          buttonText="Save"
          onPress={isEditing ? () => onEditEvent() : () => onAddEvent()}
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
  eventDetailsStyles: {
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
  icons: {
    marginRight: 300, // Change this later
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
    addEvent: info => dispatch(addEvent(info)),
    editEvent: info => dispatch(editEvent(info))
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(ModifyEventScreen);