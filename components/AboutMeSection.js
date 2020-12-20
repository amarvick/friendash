import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const AboutMeSection = ({ headline, text }) => {
  const bodyText = text.length > 0 ? 
    Array.isArray(text) 
      ? <FlatList
          data={text}
          renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>} 
        />
      : <Text style={styles.bodyText}>{text}</Text> 
    : <Text style={styles.bodyText}>Nothing Listed</Text>;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{headline}</Text>
      </View>
      <View style={styles.body}>
        {bodyText}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    alignSelf: 'flex-start',
    color: 'black',
    width: '100%',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  body: {
    alignSelf: 'flex-start',
    width: '100%',
  },
  item: {
    padding: 10,
  },
  bodyText: {
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default AboutMeSection;