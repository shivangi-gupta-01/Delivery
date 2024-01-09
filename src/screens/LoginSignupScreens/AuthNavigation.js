import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen'

const Stack = createNativeStackNavigator();

const AuthNavigation=()=> {
  return (
    <Stack.Navigator>
        <Stack.Screen name="welcomepage" component={WelcomeScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
  )
}
