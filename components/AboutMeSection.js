import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const QueriedContact = ({ headline, text }) => {
  const bodyText = Array.isArray(text) ? <FlatList
    data={text}
    renderItem={({ item }) => <Text style={styles.item}>- {item}</Text>} />
    : (<Text style={styles.bodyText}>{text}</Text>)
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
    width: windowWidth / 1.1,
    borderColor: '#65c2f5',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    width: '100%',
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyText: {
    paddingVertical: 10,
  },
});

export default QueriedContact;