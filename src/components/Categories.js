import { StyleSheet, Text, View, ScrollView  } from 'react-native'
import React from 'react'
import style, { colors } from '../globals/style'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
        <MaterialCommunityIcons name="food-apple-outline" size={24} color="black" style={styles.myicon} />
        <Text style={styles.text}>Starters</Text>
        </View>

        <View style={styles.box}>
        <MaterialIcons name="dinner-dining" size={24} color="black" style={styles.myicon} />
        <Text style={styles.text}>Dinner</Text>
        </View>

        <View style={styles.box}>
        <MaterialCommunityIcons name="noodles" size={24} color="black" style={styles.myicon} />
        <Text style={styles.text}>Breakfast</Text>
        </View>

        <View style={styles.box}>
        <MaterialCommunityIcons name="cupcake" size={24} color="black" style={styles.myicon} />
        <Text style={styles.text}>Deserts</Text>
        </View>
      </ScrollView>
      
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.col1,
      width:'100%',
      elevation: 10,
      borderRadius:10,
    },
    head:{
      color:colors.text1,
      fontSize:25,
      fontWeight: '300',
      margin: 10,
      alignSelf:'center',
      paddingBottom: 5,
      borderBottomColor:colors.text1,
      borderBottomWidth: 1,
    },
    box:{
      backgroundColor:colors.col1,
      elevation:10,
      margin: 10,
      padding: 10,
      borderRadius: 10,
      alignItems :'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    myicon:{
      marginRight:10,
      color: colors.text3,
    }
})