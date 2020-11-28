import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';

const AuthStackNavigator = createStackNavigator();

const AuthStack = () => {
  // Code below - may no longer be needed. Will use onboarding UI for when you sign up for an account
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

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
    <NavigationContainer>
      <AuthStackNavigator.Navigator initialRouteName={routeName}>
        <AuthStackNavigator.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ header: () => null }}
        />
        <AuthStackNavigator.Screen
          name="Login"
          component={LoginScreen}
          options={{ header: () => null }}
        />
        <AuthStackNavigator.Screen
          name="Signup"
          component={SignupScreen}
          options={({ navigation }) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#65c2f5',
            },
            headerLeft: () => (
              <View style={{ margin: 5 }}>
                <Icon.Button
                  name="long-arrow-left"
                  size={25}
                  backgroundColor='#65c2f5'
                  color='#333'
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            )
          })}
        />
        <AuthStackNavigator.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={({ navigation }) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#65c2f5',
            },
            headerLeft: () => (
              <View style={{ margin: 5 }}>
                <Icon.Button
                  name="long-arrow-left"
                  size={25}
                  backgroundColor='#65c2f5'
                  color='#333'
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            )
          })}
        />
      </AuthStackNavigator.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack;