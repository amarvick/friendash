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
        <Text style={styles.text}>Login Screen</Text>
        <FormInput
          labelValue={this.state.email}
          onChangeText={email => this.onChangeEmail(email)}
          placeholderText="Email"
          iconType="user"
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
        <FormButton
          buttonText="Sign In"
          onPress={() => this.signIn()}
        />
        <TouchableOpacity 
          style={styles.forgotButton}
          onPress={() => this.forgotPassword()}
        >
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <SocialButton
          buttonText="Sign in with Facebook"
          btnType="facebook"
          color="#4867aa"
          backgroundColor="#e6eaf4"
          onPress={() => {}}
        />
        <SocialButton
          buttonText="Sign in with Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => {}}
        />
        <TouchableOpacity 
          style={styles.forgotButton}
          onPress={() => this.props.navigation.navigate('Signup')}
        >
          <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
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
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
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
    fontFamily: 'Lato-Regular',
  },
});

export default LoginScreen;