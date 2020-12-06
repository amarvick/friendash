import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ContactButton = ({ buttonText, ...props }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...props}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 35,
    marginTop: 10,
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  }
});

export default ContactButton;