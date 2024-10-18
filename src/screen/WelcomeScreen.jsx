import {Button,Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
const WelcomeScreen = () => {
    const navigation =useNavigation();
const handleRegister =() =>{
    navigation.navigate("Login");
}
const handleSignup =() =>{
  navigation.navigate("Signup");
}
const handleGuestMode =() =>{
  navigation.navigate("GuestMode");
}
  return (
    <View  style={styles.mainContainer}>
      <TouchableOpacity style={{borderWidth:2,borderColor:'black',maxWidth:'40%',borderRadius:7,top:200,left:240,backgroundColor:'black',}} onPress={handleGuestMode}>
      <Text style={{color:'#fff',textAlign:'center'}} > Guest mode</Text>
      </TouchableOpacity>
    <Text style={{
      fontSize:40,
      fontWeight:'500',
      color:'#e8f0ff',
      top:60,
      left:20,
    }}>Welcome to Limat</Text>
     <Image source={require('../constants/download(2).png')} style={{
      width:50,
      height:50,
      top:150,
      left:50,
     }}/>
  <Text style={{
    fontWeight:'500',
    color:'white',
    top:120,
    left:100,
  }}>Limat It Solutions</Text>

      <View  >
      <Text style={styles.F1style}> Let's  Get</Text>
     <Text style={styles.F1style}>Started </Text>

     </View>
     <Text style={{color:'white',opacity:0.5,top:'35%',left:'10%'}}>Supported with Care,Logged with ease</Text>
<View style={styles.button
}>
   
    <Button title={'Login'} color={'black'} onPress={handleRegister} />
     {/* title={'Signup'} color={'black'} onPress={handleSignup} /> */}
     <View style={{flexDirection:'row',top:20}} >
   <Text>
    you don't have account   
   </Text>
   <Text>
   <Text style={{fontSize:15,color:'#ff206e'}} onPress={handleSignup} >
 signup ?
   </Text>
   </Text>
     </View>
</View>
    </View>



  )
}
export default WelcomeScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#087A9F',
      },
      F1style:{
      fontSize:50,
      fontWeight:'700',
      color :'#fffaff',
      textAlign:'center',
      justifyContent:'center',
      alignItems:'center',
      top:'150%',
      right:'20%',
      },
      button:{
        top:'40%',
width:'60%',
left:'20%',
borderRadius:10,
      }
      
})