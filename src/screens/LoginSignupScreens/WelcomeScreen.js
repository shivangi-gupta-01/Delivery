import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import logo1 from "../../../assets/logo1.png"
import { colors, hr80 } from "../../globals/style"
export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Foodie</Text>
      <View style={styles.logooout}>
        <Image source={logo1} style={styles.logo} />
      </View>
      <View style={hr80} />
      <Text style={styles.text}>Find the best food around you at lowest prices</Text>
      <View style={hr80} />
      <View style={styles.btnout}>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.btn}>Get Started</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#ff4242',
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 50,
    color: colors.col1,
    textAlign: "center",
    marginVertical: 10,
    // marginBottom:70,
    fontWeight: "200",
  },
  logooout: {
    width: '80%',
    height: '30%',
    // backgroundColor: '#fff',
    alignItems: 'center'
  },
  logo: {
    width: '100%',
    height :'100%'
  },
  text :{
    fontSize: 18,
    width :'80%',
    color :colors.col1,
    textAlign:'center', 
  },
  btnout :{
    flexDirection :'row',
  }

})
export default WelcomeScreen
