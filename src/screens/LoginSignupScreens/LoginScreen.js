import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native'
import { colors, titles, btn1, hr80 } from '../../globals/style'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import {firebase} from '../../../Firebase/FirebaseConfig';
export const LoginScreen = ({navigation}) => {
    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
    const [customError, setCustomError] =useState('')
    const handlesignin =()=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((userCredential)=>{
            var user =userCredential.user
            console.log("login successfull");
            // console.log(user);
            navigation.navigate('home')
        })
        .catch((error)=>{
            var errorMessage = error.message;
                console.log(errorMessage);
                if (errorMessage === 'Firebase: The email address is badly formatted. (auth/invalid-email).'
                ) {
                    setCustomError('Please enter a valid email address')
                }
                else {
                    setCustomError('Incorrect email or password')
                }

        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.head1}>Sign In</Text>
            {customError !== '' && <Text style={styles.errormsg}>{customError}</Text>}
            <View style={styles.inputout}>
                <AntDesign name="user" size={24} color={emailFocus === true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder='Email'
                    onFocus={() => {
                        setEmailFocus(true)
                        setPasswordFocus(false)
                        setShowPassword(false)
                        setCustomError('')
                    }} 
                    onChangeText={(text)=>{setEmail(text)}}/>
            </View>
            <View style={styles.inputout}>
                <MaterialIcons name="lock-outline" size={24} color={passwordFocus === true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder='Password'
                    onFocus={() => {
                        setEmailFocus(false)
                        setPasswordFocus(true)
                        setCustomError('')
                    }}
                    onChangeText={(text)=>{setPassword(text)}}
                    secureTextEntry={showPassword === false ? true : false}
                />

                <Octicons name={showPassword == false ? 'eye-closed' : 'eye'} size={24} color="black"
                    onPress={() => {
                        setShowPassword(!showPassword)
                    }} />
            </View>
            <TouchableOpacity style={btn1} onPress={()=> handlesignin()}>
                <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: 'bold' }}>Sign In</Text>
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
            <View style={hr80}/>
            <Text>Don't have an account? 
                <Text style={styles.signup} onPress={()=> navigation.navigate('signup')}> Sign Up</Text>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        // backgroundColor: '#ff4242',
        width: '100%',
        height: '100%'
    },
    head1: {
        fontSize: titles.title1,
        color: colors.text1,
        alignItems: 'center',
        marginVertical: 10
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
        marginVertical: 10,
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
        backgroundColor:'white',
        width: 50,
        margin:10,
        borderRadius:10,
        padding:10,
        alignItems :'center',
        elevation :20,
        padding: 10,
    },
    signup:{
        color :colors.text1,
    }

})
export default LoginScreen