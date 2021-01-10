import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FormMultipleSelect = ({ key, selected, value, onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      key={key}
    >
      <Text style={[styles.trainingFor, {
        backgroundColor: selected ? '#65c2f5' : 'white'
      }]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  trainingFor: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    marginVertical: 5,
    overflow: 'hidden',
    borderColor: '#DBDBDB',
  },
});

export default FormMultipleSelect;