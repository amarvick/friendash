import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Come back to this and perhaps make a wrapper function instead of repeating 'Image' twice?
const Icon = ({ onPress, source }) => {
  return onPress != null ? (
    <TouchableOpacity 
      onPress={onPress}
    >
      <Image
        source={source}
        style={styles.icons}
      />
    </TouchableOpacity>
  ) : (
    <View>
      <Image
        source={source}
        style={styles.icons}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icons: {
    width: 28,
    height: 28,
  },
});

export default Icon;