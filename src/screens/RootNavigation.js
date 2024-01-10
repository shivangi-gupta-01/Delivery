import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {AuthNavigation }from './LoginSignupScreens/AuthNavigation'
export const RootNavigation = () => {
  return (
    <NavigationContainer>
        <AuthNavigation />
        {/* <Text>root</Text> */}
    </NavigationContainer>
  )
}

export default RootNavigation
