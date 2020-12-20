import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutMeEditSection = ({ headline, component }) => {
  return (
    <View style={styles.editSection}>
      <Text style={styles.headerText}>{headline}</Text>
      {component}
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
  editSection: {
    marginBottom: 20,
    alignSelf: "stretch",
  },
});

export default AboutMeEditSection;