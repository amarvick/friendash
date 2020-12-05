import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { windowWidth } from '../utils/Dimensions';
import ContactButton from './ContactButton'

const ContactListItem = ({ image, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contactInfo}>
        <Image style={styles.contactImage} source={image} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.contactOptions}>
        <ContactButton buttonText='Chat'/>
        <ContactButton buttonText='Profile'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: windowWidth / 1.2,
    borderBottomWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingBottom: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 20,
    fontWeight: 'bold',
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