import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import logo1 from "../../../assets/logo1.png"
import { colors, hr80 } from "../../globals/style"
import {firebase} from '../../../Firebase/FirebaseConfig';
// import { useNavigation } from '@react-navigation/native'
export const WelcomeScreen = ({navigation}) => {
//   const [userlog, setUserLog]= useState(null)

//   useEffect(()=>{
//     const chkLogin=()=>{
//       firebase.auth().onAuthStateChanged((user)=>{
//         if(user){
//           // console.log(user)
//           setUserLog(user)
//         }
//         else{
//           setUserLog(null)
//           console.log('No User Logged In')
//         }
//       })
//     }
//     chkLogin()
//   },[])

// console.log(userlog);

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
        <TouchableOpacity onPress={()=> navigation.navigate('signup')}>
          <Text style={styles.btn}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.btn}>Log In</Text>
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
  },
  btn: {
    fontSize: 20,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: 'bold',
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },

})
export default WelcomeScreen
