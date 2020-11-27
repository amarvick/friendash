import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  onChangeEmail = email => {
    this.setState({ email });
  };

  onChangePassword = password => {
    this.setState({ password });
  }

  signIn = () => {
    let errors = [];
    if (this.state.email == '') {
      errors.push("Fill out Email");
    }

    if (this.state.password == '') {
      errors.push("Fill out Password");
    }

    if (errors.length == 0) {

    }

    return;
  }

  forgotPassword = () => {
    alert('You forgot your password. What a loser!')
  }

  render() {
    // const {login, googleLogin, fbLogin} = useContext(AuthContext);
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/running.png')} />

        <View style={{ marginBottom: 60 }}></View>
        <FormInput
          labelValue={this.state.email}
          onChangeText={email => this.onChangeEmail(email)}
          placeholderText="Email"
          iconType="mail"
          keyboardType="email-address"
          autoCapitalize={false}
          autoCorrect={false}
        />
        <FormInput
          labelValue={this.state.password}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
          onChangeText={password => this.onChangePassword(password)}
        />
        <View style={{ marginBottom: 30 }}></View>
        <FormButton
          buttonText="Sign In"
          onPress={() => this.signIn()}
        />

        <View style={{ marginBottom: 30 }}></View>
        <TouchableOpacity
          onPress={() => this.forgotPassword()}
        >
          <Text style={styles.text}>Forgot Password?</Text>
        </TouchableOpacity>


        <Text style={styles.text}>
          Don't have an account?
            <Text
              onPress={() => this.props.navigation.navigate('Signup')}
              style={styles.linkText}> Sign Up
            </Text>
        </Text>
      </View>
    );
  }
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
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
});

export default LoginScreen;