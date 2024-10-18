import { Image, Text, View,Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GuestMode = () => {
    const navigation =useNavigation();
    const handleSignup =() =>{
        navigation.navigate("Signup");
      }
      const handlelogin =() =>{
        navigation.navigate("Login");
      }
  return (
    <View style={{backgroundColor:'#00a7e1',flex:1}}>
      
<Text style={{ fontSize:40,
      fontWeight:'400',
      color:'#e8f0ff',
      top:60,
      left:20,}}>Welcome to LimaT</Text>
        <View style={{flexDirection:'row'}}>
      <Image source={require('../constants/download(2).png')} style={{
      width:50,
      height:50,
      top:150,
      left:50,
     }}/>
     <Text style={{fontWeight:'500',
    color:'white',
    top:160,
    left:80,}}>IT Solutions</Text>
      </View>
      <Pressable>
        <Text style={{borderWidth:5,borderColor:'#087A9F',maxWidth:'60%',borderRadius:7,top:200,left:100,COLOR:'#fff', padding:18,textAlign:'center',backgroundColor:'#087A9F',color:'white'}} onPress={ handleSignup}>CREATE ACCOUNT</Text>

      </Pressable>
      <Pressable style={{}}>
        <Text style={{color:'#087A9',borderWidth:5,borderColor:'#FFF',maxWidth:'60%',borderRadius:7,top:250,left:100, padding:10,textAlign:'center',backgroundColor:'#fff',color:'#087A9'}} onPress={handlelogin}>I already have an Account</Text>

      </Pressable>
      <Text style={{ fontSize:25,
      fontWeight:'500',
      color:'#e8f0ff',
      top:300,
      left:20,}}>Industry Specific Ideas</Text>
      <View style={{flexDirection:'row'}}>
<Text style={{top:340,
      left:20,color:'red'}}>full stack development course</Text>
     <Text style={{borderWidth:5,borderColor:'orange',maxWidth:'70%',borderRadius:10,top:400,left:-110,color:'navy', padding:8,textAlign:'center',backgroundColor:'orange'}}>Free trails</Text>
     <Text style={{borderWidth:5,borderColor:'orange',maxWidth:'70%',borderRadius:10,top:400,left:-50,color:'navy', padding:8,textAlign:'center',backgroundColor:'orange'}}>premium plans</Text>
      </View>
      <Text style={{top:460,
      left:20,color:'#FFF',textAlign:'center'}}>send  Feed back</Text>
    </View>
  )
}

export default GuestMode