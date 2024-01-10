import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreen } from './src/screens/LoginSignupScreens/WelcomeScreen';
import {LoginScreen} from './src/screens/LoginSignupScreens/LoginScreen';
import {SignUpScreen} from './src/screens/LoginSignupScreens/SignUpScreen'
import {RootNavigation} from './src/screens/RootNavigation';
export default function App() {
  console.log("app rendering")
  return (
    // <WelcomeScreen/>
    // <LoginScreen/>  
    <RootNavigation/>
    // <SignUpScreen/>
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

