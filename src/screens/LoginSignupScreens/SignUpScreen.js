import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, ScrollView , StatusBar} from 'react-native'
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
  const handlesignup = async () => {
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
    else if (phone.length != 10) {
      setCustomError("Phone number should be 10 digit");
      return;
    }
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          console.log(userCredentials?.user.uid);
          console.log('user created')
          // setSuccessmsg('User created successfully')
          if (userCredentials?.user.uid != null) {
            const userRef = firebase.firestore().collection('UserData')
            userRef.add(
              {
                email: email,
                password: password,
                // cpassword: cpassword,
                phone: phone,
                name: name,
                address: address,
                uid: userCredentials?.user?.uid,
              }
            ).then(() => {
              console.log('data added to firestore')
              setSuccessmsg('User created successfully')
            }).catch((error) => {
              console.log('firestore error ', error)
            }
            )
          }
        })
        .catch((error) => {
          console.log('sign up firebase error ', error.message)
          if (error.message == 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).') {
            setCustomError('Email already exists')
          }
          else if (error.message == 'Firebase: The email address is badly formatted. (auth/invalid-email).') {
            setCustomError('Invalid Email')
          }
          else if (error.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
            setCustomError('Password should be at least 6 characters')
          }
          else {
            setCustomError(error.message)
          }
        })
    }
    catch (error) {
      console.log('sign up system error ', error.message)
    }

  }
  // console.log(email)
  return (
    // email
    <View style={styles.container}>
      <StatusBar/>
      {successmsg == null ?
        <View style={styles.container}>
          <Text style={styles.head1}>Sign Up</Text>
          {customError !== '' && <Text style={styles.errormsg}>{customError}</Text>}
          <View style={styles.inputout}>
            <AntDesign name="user" size={24} color={namefocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder='Name'
              onFocus={() => {
                setNamefocus(true)
                setEmailFocus(false)
                setPasswordFocus(false)
                setPasswordcFocus(false)
                setMobileFocus(false)
                setCustomError('')
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
                setCustomError('')
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
                setCustomError('')
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
                setCustomError('')
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
                setCustomError('')
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
            <TextInput style={styles.input} placeholder='Enter Your Address' onChangeText={(text) => setAddress(text)}
              onPress={() => {
                setEmailFocus(false)
                setPasswordFocus(false)
                setShowPassword(false)
                setNamefocus(false)
                setMobileFocus(false)
                setCustomError('')
              }} />
          </View>
          <TouchableOpacity style={btn1} onPress={() => handlesignup()}>
            <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: 'bold' }} >Sign In</Text>
          </TouchableOpacity>

          {/* <Text style={styles.forget}>Forget Password</Text> */}
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
        </View>
        :
        <View style={styles.container1}>
          <Text style={styles.successmessage}>{successmsg}</Text>
          <TouchableOpacity style={btn1} onPress={() => navigation.navigate('login')}>
            <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={btn1} onPress={() => setSuccessmsg(null)}>
            <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: "bold" }}>Go Back</Text>
          </TouchableOpacity>
        </View>

      }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 50,
  },
  container1: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
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
  errormsg: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    // borderColor :'red',
    // borderWidth: 1,
    // borderRadius: 10,
    padding: 10,
  },
  successmessage: {
    color: 'green',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  }
})
export default SignUpScreen