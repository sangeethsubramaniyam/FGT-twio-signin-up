import {  Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GuestMode = () => {
  const navigation=useNavigation();
const handleback = ()=>{
navigation.navigate('Welcome')
}
      
  return (
    <View>
  <Text style={{fontSize:20,fontWeight:350,textAlign:'center',color:'black',top:150}}>Welcome to Guest Mode</Text>
    
    <Text onPress={()=>handleback()} style={{top:250,left:300}}>  back to Home>></Text>
    </View>

  )
}

export default GuestMode