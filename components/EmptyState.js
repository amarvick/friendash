import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const EmptyState = ({ photo, header, subtitle }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={photo} />
      <Text style={styles.headerText}>{header}</Text>
      <Text style={styles.subtitleText}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  photo: {
    height: 150,
    width: 150,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 20,
  },
  subtitleText: {
    fontSize: 14,
    width: '85%',
    textAlign: 'center',
  },
});

export default EmptyState;