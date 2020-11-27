import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';

class SignupScreen extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  onChangeEmail = email => {
    this.setState({ email });
  };

  onChangePassword = password => {
    this.setState({ password });
  }

  onChangePassword = confirmPassword => {
    this.setState({ confirmPassword });
  }

  register = () => {
    let errors = [];
    if (this.state.email == '') {
      errors.push("Fill out Email");
    }

    if (this.state.password == '') {
      errors.push("Fill out Password");
    }

    if (this.state.confirmPassword == '') {
      errors.push("Fill out Confirm Password");
    }

    if (this.state.confirmPassword != this.state.password) {
      errors.push("Passwords don't match");
    }


    if (errors.length == 0) {
      user = this.state;
      axios.post(`https://friendash-app.heroku.com/user/signup`, { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }

    return;
  }

  render() {
    // const {login, googleLogin, fbLogin} = useContext(AuthContext);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Create An Account</Text>
  
        <FormInput
          labelValue={this.state.email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
  
        <FormInput
          labelValue={this.state.password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />
  
        <FormInput
          labelValue={this.state.confirmPassword}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Confirm Password"
          iconType="lock"
          secureTextEntry={true}
        />
  
        <FormButton
          buttonText="Sign Up"
          onPress={() => register(email, password)}
        />
  
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Privacy Policy
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