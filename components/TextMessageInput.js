import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { windowHeight } from '../utils/Dimensions';

import Icon from 'react-native-vector-icons/Ionicons';

const TextMessageInput = ({ labelValue, placeholderText, sendMessage, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={labelValue}
        style={styles.input}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...props}
      />
      <View style={styles.iconStyle}>
        <Icon
          name='md-paper-plane'
          size={25}
          color={labelValue !== '' ? "#65c2f5" : "#DCDCDC"}
          onPress={sendMessage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: windowHeight / 18,
    borderColor: '#DCDCDC',
    borderTopWidth: 1,
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
    borderLeftColor: '#fff',
    borderLeftWidth: 1,
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

export default TextMessageInput;