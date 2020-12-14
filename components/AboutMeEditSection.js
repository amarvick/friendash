import React from 'react';
import { FlatList, View, Text, TextInput, StyleSheet } from 'react-native';
import { windowWidth } from '../utils/Dimensions';
import FormInput from './FormInput';

const AboutMeEditSection = ({ headline, text, numberOfLines, iconType, ...props }) => {
  const bodyText = Array.isArray(text) ? (
    <FlatList
      data={text}
      renderItem={({ item }) => <Text style={styles.item}>- {item}</Text>} />
  ) : (
      <FormInput
        labelValue={text}
        onChangeText={props.onChangeText}
        placeholderText={headline}
        iconType={iconType}
        numberOfLines={numberOfLines}
        keyboardType="text"
        autoCapitalize="none"
        autoCorrect={false}
      />
    );
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
    flex: 1,
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    width: windowWidth,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'black',
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
    // width: '90%',
  },
  bodyText: {
    padding: 10,
    fontSize: 16,
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AboutMeEditSection;