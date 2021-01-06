import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { windowWidth } from '../utils/Dimensions';
import ContactButton from './ContactButton'

const ContactListItem = ({ connection, goToProfile }) => {
  const pending = connection.connectionStatus == 'PENDING' ? (
    <Text style={styles.pendingText}>Pending...</Text>
  ) : null;
  return (
    <View style={styles.container}>
      <View style={styles.contactInfo}>
        <Image style={styles.contactImage} source={connection.image} />
        <View style={styles.contactTextInfo}>
          <Text style={styles.nameText}>{connection.name}</Text>
          {pending}
        </View>
      </View>
      <View style={styles.contactOptions}>
        <ContactButton buttonText='View Profile' onPress={goToProfile} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: windowWidth / 1.2,
    borderBottomWidth: 1,
    borderColor: '#EEF4FB',
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingBottom: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactTextInfo: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  nameText: {
    fontWeight: 'bold',
  },
  pendingText: {
    color: 'gray',
  },
  contactOptions: {
    flexDirection: 'row',
  },
  contactImage: {
    height: 45,
    width: 45,
    borderColor: '#65c2f5',
    borderRadius: 100,
    borderWidth: 1,
    top: 5,
  },
});

export default ContactListItem;