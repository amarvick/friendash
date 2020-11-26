import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

const AppStack = createStackNavigator();

const AuthStack = () => {
  // Code below - may no longer be needed. Will use onboarding UI for when you sign up for an account
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    })
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <AppStack.Navigator initialRouteName={routeName}>
      <AppStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ header: () => null }}
      />
      <AppStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <AppStack.Screen
        name="Signup"
        component={SignupScreen}
        options={({ navigation }) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{margin: 10}}>
              <Icon.Button
                name="long-arrow-left"
                size={25}
                backgroundColor='#f9fafd'
                color='#333'
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          )
        })}
      />
    </AppStack.Navigator>
  )
}

export default AuthStack;