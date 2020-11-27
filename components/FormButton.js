import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight } from '../utils/Dimensions';

const FormButton = ({ buttonText, ...props }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...props}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '85%',
    height: windowHeight / 20,
    backgroundColor: '#4687AB',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  }
});

export default FormButton;