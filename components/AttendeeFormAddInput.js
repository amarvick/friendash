import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import FormInput from './FormInput';
import { Autocomplete, withKeyboardAwareScrollView } from 'react-native-dropdown-autocomplete';

const AttendeeFormAddInput = ({ labelValue, onChangeText }) => {
  return (
    <View>
      <FormInput
        labelValue={labelValue}
        onChangeText={onChangeText}
        placeholderText="Choose attendee"
        iconType={require('../assets/icons/Person.png')}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    connections: state.connectionsReducer.connections || [],
  }
}

export default connect(
  mapStateToProps,
  null,
)(AttendeeFormAddInput);