import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');

  const resetPassword = () => {
    let errors = [];
    if (email == '') {
      errors.push("Fill out Email");
    }

    if (errors.length == 0) {
      alert('Email sent')
    }

    return;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forgot Password</Text>

      <FormInput
        labelValue={email}
        onChangeText={(email) => setEmail(email)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormButton
        buttonText="Email Instructions"
        onPress={() => resetPassword()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#65c2f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28,
    marginBottom: 60,
    color: '#051d5f',
  },
});

export default ForgotPasswordScreen;