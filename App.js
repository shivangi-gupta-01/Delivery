import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreen } from './src/screens/LoginSignupScreens/WelcomeScreen';
import {LoginScreen} from './src/screens/LoginSignupScreens/LoginScreen';
import {SignUpScreen} from './src/screens/LoginSignupScreens/SignUpScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
// import {RootNavigation} from './src/screens/RootNavigation';
export default function App() {
  console.log("app rendering")
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
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
            <Stack.Screen name="home" component={HomeScreen}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

