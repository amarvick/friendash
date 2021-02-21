import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { windowHeight } from '../utils/Dimensions';

import Autocomplete from 'react-native-autocomplete-input';
import Icon from './Icon';

const AttendeeFormAddInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <Icon
          source={props.iconType}
        />
      </View>
      <Autocomplete
        autoCorrect={false}
        containerStyle={styles.input}
        data={props.connections.filter(name => name.toLowerCase().includes(props.labelValue.toLowerCase()))}
        defaultValue={props.labelValue}
        inputContainerStyle={styles.inputContainerStyle}
        listContainerStyle={styles.listContainerStyle}
        listStyle={styles.listStyle}
        onChangeText={props.onChangeText}
        hideResults={props.labelValue.length == 0 || props.connections.includes(props.labelValue)}
        placeholder="Who are you running with?"
        renderItem={({ item }) => (
          <TouchableOpacity key={`contact-${item}`} onPress={() => props.onChangeText(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
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
    zIndex: 1,
  },
  inputContainerStyle: {
    borderWidth: 0,
    width: '100%',
    top: 5,
    zIndex: 10,
  },
  listContainerStyle: {
    width: '100%',
  },
  listStyle: {
    padding: 10,
    margin: 10,
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

export default AttendeeFormAddInput;