import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const ScheduledEventInfoScreen = (event) => {
  const { id, eventName, date, time, location } = event.route.params.e;
  return (
    <View style={styles.container}>
      <Text>{eventName}</Text>
      <Text>{date}</Text>
      <Text>{time}</Text>
      <Text>{location}</Text>
      <Button title="Cancel Event" onPress={() => alert('are you sure you want to cancel?')}/>
    </View>
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

export default ScheduledEventInfoScreen;