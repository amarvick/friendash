import React from 'react';
import { View } from 'react-native';

import FormInput from './FormInput';

const AttendeeFormEditInput = ({ labelValue }) => {
  return (
    <View>
      <FormInput
        labelValue={labelValue}
        iconType={require('../assets/icons/Person.png')}
        editable={false}
      />
    </View>
  );
}

export default AttendeeFormEditInput;