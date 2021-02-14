import React from 'react';
import { Image, View, TextInput, StyleSheet } from 'react-native';
import { windowHeight } from '../utils/Dimensions';

const AddItemInput = ({ labelValue, placeholderText, iconType, onIconClick, ...props }) => {
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
        <Image 
          source={iconType} 
          style={styles.icons} 
          onPress={onIconClick}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
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
  icons: {
    width: 22,
    height: 22,
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

export default AddItemInput;