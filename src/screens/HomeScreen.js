import { View, Text, StyleSheet, StatusBar, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import HomeHeadNav from '../components/HomeHeadNav'
import Categories from '../components/Categories'
import OfferSlider from '../components/OfferSlider'
import { AntDesign } from '@expo/vector-icons'
import style, { colors, nonveg } from '../globals/style'
import { firebase } from '../../Firebase/FirebaseConfig'
import CardSlider from '../components/CardSlider'


const HomeScreen = ({navigation}) => {

  const [foodData, setFoodData] = useState([])
  const [VegData, setVegData] = useState([])
  const [NonVegData, setNonVegData] = useState([])
  const [Search, setSearch]=useState("")
  // console.log(Search)
  const foodRef = firebase.firestore().collection('FoodData');
  useEffect(() => {
    foodRef.onSnapshot(snapshot => {
      // data function h
      setFoodData(snapshot.docs.map(doc => doc.data()))
      // console.log(snapshot.docs.map(doc=>doc.data()))
    })
  }, [])
  // for veg and non veg
  useEffect(() => {
    setVegData(foodData.filter(item => item.foodType == 'veg'))
    setNonVegData(foodData.filter(item => item.foodType == 'non-veg'))
  }, [foodData])
  // console.log("Veg here")
  // console.log(VegData)



  return (
    <ScrollView style={styles.container}>
      {/* <View> */}
      <StatusBar />
      <HomeHeadNav navigation={navigation}/>
      <View style={styles.searchbox}>
        <AntDesign name='search1' size={24} color="black" style={styles.searchicon} />
        <TextInput style={styles.input} placeholder='search'
        onChangeText={(text)=>setSearch(text)}/>
      </View>
      {Search!=''
      && <View style={styles.searchresultouter}>
        <FlatList style={styles.searchresultinner}
         data={foodData}
         renderItem={({item})=>{
          if(item.foodName.toLowerCase().includes(Search.toLocaleLowerCase())){
            return (
              <View style={styles.searchresult}>
                <AntDesign name='arrowright' size={24} color="black"/>
                <Text style={styles.searchresulttext}>{item.foodName}</Text>
              </View>
            )
          }
         }}
         />
        </View>}
      <Categories />
      <OfferSlider />
      <CardSlider title={"Today's Special"} data={foodData} />
      <CardSlider title={"Non Veg Dishes"} data={NonVegData} />
      <CardSlider title={"Veg Hunger"} data={VegData} />
      {/* <Text>HomeScreen</Text> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.col1,
    // alignItems: 'center',
    width: '100%',
  },
  searchbox: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: colors.col1,
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    margin: 20,
    elevation: 10,
  },
  input: {
    marginLeft: 10,
    width: '90%',
    fontSize: 18,
    color: colors.text1,
  },
  searchicon: {
    color: colors.text1,
  },
  searchresultouter:{
    width: '100%',
    marginHorizontal: 30,
    backgroundColor:colors.col1,

  },
  searchresultinner:{
    width:'100%',
  },
  searchresult:{
    width:'100%',
    flexDirection :'row',
    alignItems:'center',
    padding: 5,
  },
  searchresulttext:{
    marginLeft: 10,
    fontSize :18,
    color:colors.text1,
  },
  
})

export default HomeScreen;
