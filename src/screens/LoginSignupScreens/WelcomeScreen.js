import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
        <Text>Welcome to Foodie</Text>
        <View >
            <Image source={icon.png}/>
        </View>
    </View>
  )
}


export default WelcomeScreen
