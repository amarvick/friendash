import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { windowHeight } from '../../utils/Dimensions';
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import { AuthContext } from '../../components/context';

const userInfo = {
  email: 'alex@friendash.com',
  password: 'password',
}

const LoginScreen = ({ navigation }) => {
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

  const { signIn } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/running.png')} />
      <FormInput
        labelValue={data.email}
        onChangeText={email => onChangeEmail(email)}
        placeholderText="Email"
        iconType="mail"
        keyboardType="email-address"
        autoCapitalize={false}
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
        onPress={() => { signIn(data.email, data.password) }}
      />

      <View style={{ marginBottom: 30 }}></View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.signUp}>
        <Text style={styles.text}>
          New User?
            <Text
            onPress={() => navigation.navigate('Signup')}
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

export default LoginScreen;