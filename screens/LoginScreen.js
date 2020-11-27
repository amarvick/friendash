import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, AsyncStorage } from 'react-native';
import { windowHeight } from '../utils/Dimensions';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';

const userInfo = {
  email: 'alex@friendash.com',
  password: 'password',
}

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

  signIn = async () => {
    let errors = [];
    if (this.state.email == '') {
      errors.push("Fill out Email");
    }

    if (this.state.password == '') {
      errors.push("Fill out Password");
    }

    if (errors.length == 0) {
      const user = this.state;
      if (user.email === userInfo.email && user.password === userInfo.password) {
        await AsyncStorage.setItem('isLoggedIn', '1');
        this.props.navigation.navigate('LoggedIn')
      } else {
        alert('Wrong stuff')
      }
      // axios.get(`https://friendash-app.heroku.com/user/login`, { user })
      //   .then(res => {
      //     console.log(res);
      //     console.log(res.data);
      //   })
    }

    return;
  }

  render() {
    // const {login, googleLogin, fbLogin} = useContext(AuthContext);
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/running.png')} />
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
          onPress={this.signIn}
        />

        <View style={{ marginBottom: 30 }}></View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.signUp}>
          <Text style={styles.text}>
            New User?
            <Text
              onPress={() => this.props.navigation.navigate('Signup')}
              style={styles.linkText}> Create an account.
            </Text>
          </Text>
        </View>
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