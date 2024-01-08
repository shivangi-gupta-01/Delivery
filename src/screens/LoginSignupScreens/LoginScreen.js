import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, titles } from '../../globals/style'
export const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.head1}>Sign In</Text>
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
    }
})
export default LoginScreen