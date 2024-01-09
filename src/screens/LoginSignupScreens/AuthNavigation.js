import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen'

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='welcome'>
            <Stack.Screen name="welcome" component={WelcomeScreen}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="signup" component={SignUpScreen}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="login" component={LoginScreen}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    )
}
export default AuthNavigation
