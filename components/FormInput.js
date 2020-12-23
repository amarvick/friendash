import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { windowHeight } from '../utils/Dimensions';

import Icon from 'react-native-vector-icons/Ionicons';

const FormInput = ({ labelValue, placeholderText, iconType, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <Icon
          name={iconType}
          size={25}
          color="#65c2f5"
        />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '85%',
    height: windowHeight / 20,
    borderColor: '#b0d6f5',
    borderRadius: 25,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#fff',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FormInput;