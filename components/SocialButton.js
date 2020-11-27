import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight } from '../utils/Dimensions';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({ backgroundColor, btnType, color, buttonText, ...props }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.buttonContainer, { backgroundColor: backgroundColor }
      ]}
      {...props}
    >
      <View style={styles.iconWrapper}>
        <FontAwesome
          style={styles.icon}
          name={btnType}
          size={22}
          color={color}
        />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, { color: color }]}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    width: '40%',
    height: windowHeight / 20,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 25,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default SocialButton;