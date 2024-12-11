import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Header'

const HomeScreen = () => {
  return (
    <View>
      <Header/>
      <Text style={{textAlign:'center',justifyContent:'center',alignItems:'center',marginTop:300,color:'#000',fontSize:20}}>welcome to HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
