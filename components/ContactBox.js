import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import FormButton from './FormButton';

const ContactBox = ({ name, location, distance, type, isRequesting }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{name}</Text>
      </View>
      <View style={styles.body}>
        <View>
          <View style={styles.bodyContent}>
            <Image style={styles.contactImage} source={require('../assets/running.png')} />
          </View>
          <View style={styles.bodyContent}>
            <Text style={{ fontSize: 22, marginBottom: 8 }}>{type}</Text>
            <Text style={styles.bodyText}>{location}</Text>
            <Text style={styles.bodyText}>{`~${distance} miles away`}</Text>
          </View>
        </View>
        {isRequesting ? (
          <View>
            <Text>"Hey, let's go on a run!"</Text>
            <FormButton 
              buttonText="Accept"
            />
            <FormButton 
              buttonText="Decline"
            />
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: windowWidth / 1.1,
    height: windowHeight / 6,
    borderColor: '#65c2f5',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#0c81c0',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#65c2f5',
    width: '100%',
    padding: 10,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    margin: 0
  },
  headerText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  body: {
    flexDirection: 'row',
    width: '100%',
    top: 10,
  },
  bodyContent: {
    paddingHorizontal: 25,
  },
  bodyText: {
    fontSize: 16,
    alignItems: 'center',
  },
  contactImage: {
    height: 75,
    width: 75,
    borderColor: '#65c2f5',
    borderRadius: 100,
    borderWidth: 1,
    top: 5,
  },
});

export default ContactBox;