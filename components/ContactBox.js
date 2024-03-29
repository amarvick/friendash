import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { windowWidth } from '../utils/Dimensions';
import FormButton from './FormButton';

const ContactBox = ({
  name,
  location,
  distance,
  type,
  isRequesting,
  acceptUser,
  declineUser,
  openingMessage
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{name}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.userInfo}>
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
          <View style={styles.respondRequestContainer}>
            <Text>
              {`"${openingMessage}"`}
            </Text>
            <View style={styles.buttonGroup}>
              <FormButton
                buttonText="Accept"
                onPress={acceptUser}
              />
              <FormButton
                buttonText="Decline"
                onPress={declineUser}
              />
            </View>
          </View>
        ) : null}
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: windowWidth / 1.1,
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
  bodyContainer: {
    width: '100%',
    padding: 10,
  },
  bodyContent: {
    paddingHorizontal: 25,
  },
  bodyText: {
    fontSize: 16,
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
  },
  contactImage: {
    height: 75,
    width: 75,
    borderColor: '#65c2f5',
    borderRadius: 100,
    borderWidth: 1,
  },
  respondRequestContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    width: '100%',
    alignItems: 'center',
  },
});

export default ContactBox;