import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { windowHeight } from '../../utils/Dimensions';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import { login } from '../../redux/actions/loginActions';
import { connect } from 'react-redux';

const LoginScreen = ( props ) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });

  const onChangeEmail = (email) => {
    setData({
      ...data,
      email,
    });
  }

  const onChangePassword = (password) => {
    setData({
      ...data,
      password,
    });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/running.png')} />
      <FormInput
        labelValue={data.email}
        onChangeText={email => onChangeEmail(email)}
        placeholderText="Email"
        iconType="mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={data.password}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        onChangeText={password => onChangePassword(password)}
      />
      <View style={{ marginBottom: 30 }}></View>
      <FormButton
        buttonText="Sign In"
        onPress={() => props.login({'email': data.email, 'password': data.password })}
      />

      <View style={{ marginBottom: 30 }}></View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.signUp}>
        <Text style={styles.text}>
          New User?
            <Text
            onPress={() => props.navigation.navigate('Signup')}
            style={styles.linkText}> Create an account.
            </Text>
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
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
    marginBottom: 60,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#051d5f',
  },
  linkText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#051d5f',
  },
  signUp: {
    position: 'absolute',
    top: windowHeight - 100
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  }
}

export default connect(null, mapDispatchToProps)(LoginScreen);