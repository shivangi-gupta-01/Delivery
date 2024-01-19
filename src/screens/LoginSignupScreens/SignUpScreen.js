import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import { colors, titles, btn1, hr80 } from '../../globals/style'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { firebase } from '../../../Firebase/FirebaseConfig'


export const SignUpScreen = ({ navigation }) => {
  const [emailFocus, setEmailFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [passwordcFocus, setPasswordcFocus] = useState(false)
  const [showcPassword, setShowcPassword] = useState(false)
  const [mobilefocus, setMobileFocus] = useState(false)
  const [namefocus, setNamefocus] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [customError, setCustomError] = useState('');
  const [successmsg, setSuccessmsg] = useState(null);
  const handlesignup = async() => {
    console.log("called")
    const FormData = {
      email: email,
      name: name,
      password: password,
      phone: phone,
      address: address
    }
    if (password != cpassword) {
      // alert("Password doesn't match");
      setCustomError("Password doesn't match");
      return;
    }
    
    else if(phone.length!=10){
      setCustomError("Phone number should be of 10 digits")
      return;
    }
    try{
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(()=>{
        console.log("User Created")
        setSuccessmsg("User Created Successfully")
        const userRef=firebase.firestore().collection('UserData')
        userRef.add(FormData).then(()=>{
          console.log("data to firestore")
        })
        .catch((error)=>{
          console.log(error.message)
        })
      })
      .catch((error)=>{
        console.log("sign up error", error.message)
      })
    }
    catch(error){
      console.log("......",error.message)
    }
  }
  // console.log(email)
  return (
    // email
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>

      <Text style={styles.head1}>Sign Up</Text>
      {customError !=='' && <Text style={styles.errormsg}>{customError}</Text>}
      <View style={styles.inputout}>
        <AntDesign name="user" size={24} color={namefocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Name'
          onFocus={() => {
            setNamefocus(true)
            setEmailFocus(false)
            setPasswordFocus(false)
            setPasswordcFocus(false)
            setMobileFocus(false)
          }} onChangeText={(text) => setName(text)} />
      </View>
      <View style={styles.inputout}>
        <Entypo name="email" size={24} color={emailFocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Email'
          onFocus={() => {
            setNamefocus(false)
            setEmailFocus(true)
            setPasswordFocus(false)
            setPasswordcFocus(false)
            setMobileFocus(false)
          }} onChangeText={(text) => setEmail(text)} />
      </View>
      {/* phone number */}
      <View style={styles.inputout}>
        <Feather name="smartphone" size={24} color={mobilefocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Phone Number'
          onFocus={() => {
            setNamefocus(false)
            setEmailFocus(false)
            setPasswordFocus(false)
            setPasswordcFocus(false)
            setMobileFocus(true)
          }} onChangeText={(text) => setPhone(text)} />
      </View>
      {/* password set */}
      <View style={styles.inputout}>
        <MaterialIcons name="lock-outline" size={24} color={passwordFocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Password'
          onFocus={() => {
            setNamefocus(false)
            setEmailFocus(false)
            setPasswordFocus(true)
            setPasswordcFocus(false)
            setMobileFocus(false)
          }}
          secureTextEntry={showPassword === false ? true : false}
          onChangeText={(text) => setPassword(text)}
        />

        <Octicons name={showPassword == false ? 'eye-closed' : 'eye'} size={24} color="black"
          onPress={() => {
            setShowPassword(!showPassword)
          }} />
      </View>
      {/* confirm password */}
      <View style={styles.inputout}>
        <MaterialIcons name="lock-outline" size={24} color={passwordcFocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Confirm Password'
          onFocus={() => {
            setNamefocus(false)
            setEmailFocus(false)
            setPasswordFocus(false)
            setPasswordcFocus(true)
            setMobileFocus(false)
          }}
          secureTextEntry={showcPassword === false ? true : false}
          onChangeText={(text) => setCPassword(text)}
        />

        <Octicons name={showcPassword == false ? 'eye-closed' : 'eye'} size={24} color="black"
          onPress={() => {
            setShowcPassword(!showcPassword)
          }} />
      </View>
      <Text style={styles.address}>Please Enter Your Address</Text>
      <View style={styles.inputout}>
        <TextInput style={styles.input} placeholder='Enter Your Address' onChangeText={(text) => setAddress(text)} />
      </View>
      <TouchableOpacity style={btn1}>
        <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: 'bold' }} onPress={handlesignup}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.forget}>Forget Password</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftext}>Sign in With</Text>

      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gficons}><AntDesign name="google" size={24} color="#EA4335" /></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.gficons}><FontAwesome name="facebook" size={24} color="#426782" /></View>

        </TouchableOpacity>
      </View>
      <View style={hr80} />
      <Text>Already have an account?
        <Text style={styles.signup} onPress={() => navigation.navigate('login')}> Sign In</Text>
      </Text>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 50,
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    alignItems: 'center',
    marginVertical: 10,
    fontWeight: '500'
  },
  inputout: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 20,
    // alignSelf :'center'
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%'
  },
  forget: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10
  },
  gftext: {
    color: colors.text2,
    marginBottom: 10,
    fontSize: 25,
  },
  or: {
    color: colors.text1,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  gf: {
    flexDirection: 'row',
  },
  gficons: {
    backgroundColor: 'white',
    width: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 20,
    padding: 10,
  },
  signup: {
    color: colors.text1,
  },
  address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: 'center',
    marginTop: 20,
  },

})
export default SignUpScreen