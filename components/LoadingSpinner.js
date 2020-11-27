import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoadingSpinner = ({ backgroundColor, btnType, color, buttonText, ...props }) => {
  return (
    <View>
      
    </View>
  );
}

const styles = StyleSheet.create({
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

export default LoadingSpinner;