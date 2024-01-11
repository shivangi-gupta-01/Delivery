import { View, Text,StyleSheet, StatusBar, TextInput } from 'react-native'
import React from 'react'
import HomeHeadNav from '../components/HomeHeadNav'
import Categories from '../components/Categories'
import OfferSlider from '../components/OfferSlider'
const HomeScreen = () => {
  return (
    <View>
        <StatusBar/>
        <HomeHeadNav/>
        <TextInput placeholder='search'/>
        <Categories/>
        <OfferSlider/>
      {/* <Text>HomeScreen</Text> */}
    </View>
  )
}

export default HomeScreen