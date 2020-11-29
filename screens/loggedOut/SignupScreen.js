import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';

const SignupScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChangeEmail = (email) => {
    setData({
      ...data,
      email,
    });
  }

  const onChangePassword = (email) => {
    setData({
      ...data,
      email,
    });
  }

  const onChangeConfirmPassword = (email) => {
    setData({
      ...data,
      email,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create An Account</Text>

      <FormInput
        labelValue={data.email}
        onChangeText={(userEmail) => onChangeEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={data.password}
        onChangeText={(userPassword) => onChangePassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={data.confirmPassword}
        onChangeText={(userConfirmPassword) => onChangeConfirmPassword(userConfirmPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonText="Sign Up"
      // onPress={() => register(email, password)}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
            Terms of service
            </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
          Privacy Policy
          </Text>
      </View>
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
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
});

export default SignupScreen;