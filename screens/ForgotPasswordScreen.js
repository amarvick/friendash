import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';

class ForgotPasswordScreen extends React.Component {
  state = {
    email: '',
  }

  onChangeEmail = email => {
    this.setState({ email });
  };

  resetPassword = () => {
    let errors = [];
    if (this.state.email == '') {
      errors.push("Fill out Email");
    }

    if (errors.length == 0) {
      alert('Email sent')
    }

    return;
  }

  render() {
    // const {login, googleLogin, fbLogin} = useContext(AuthContext);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Forgot Password</Text>
  
        <FormInput
          labelValue={this.state.email}
          onChangeText={(userEmail) => setEmail(userEmail)}
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