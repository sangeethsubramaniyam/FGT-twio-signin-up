import { StyleSheet, View,Text, TextInput,Button } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={{top:80}}>
      <Text style={{fontSize:30,fontWeight:600,color:'navy',textAlign:'center'}}>LIMAT</Text>
      <TextInput type="text" placeholder='username' 
style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:40,borderRadius:12,}}
      />
       <TextInput type="text" placeholder='password' 
style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:80,borderRadius:12,}}
      />
    
      {/* <TextInput type="text" placeholder='password' style={{backgroundColor:'#fff',width:'50%'}} secureTextEntry/> */}
      <View style={{width:'40%',borderRadius:18,top:100,left:100}}>
   <Button title='submit' color='navy'/>
   </View>
   <Text style={{top:110,left:100}}> you don't have account </Text>
   <Text style={{top:115,left:150, textDecorationLine:'underline'}}>signup?</Text>
      </View>
  )
}

export default Login

const styles = StyleSheet.create({


}) 