import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './OnboardingScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode='none'>
    <RootStack.Screen name="Onboarding" component={OnboardingScreen}/>
    <RootStack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
    <RootStack.Screen name="Login" component={LoginScreen}/>
    <RootStack.Screen name="Signup" component={SignupScreen}/>
  </RootStack.Navigator>
);

export default RootStackScreen;