import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const Signupscreen = () => {
    const navigation =useNavigation();
    const handleRegister =() =>{
        navigation.navigate("Login");
    }
    const handlehome =() =>{
        navigation.navigate("Welcome");
    }
  return (
    <View>
        
       <View style={{top:50}}>
      <Text style={{fontSize:30,fontWeight:600,color:"#59ABC9",textAlign:'center',}}>LIMAT</Text>
      <Text style={{fontSize:23,fontWeight:500,color:'black', left:30}}>Create Account</Text>
      <Text style={{top:25,left:80,color:'black'}}>User Name :</Text>
<TextInput type="text" placeholder='User Name'
style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:40,borderRadius:12,}}
      />
       <Text style={{top:60,left:80,color:'black'}}>Email Address :</Text>
       <TextInput type="text" placeholder='Enter Email Address' keyboardType='email'
style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:70,borderRadius:12,}}
      />
      <View>
    <Text style={{top:80,left:80,color:'black'}}>Password :</Text>
       <TextInput type="text" placeholder='enter password' secureTextEntry
style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:90,borderRadius:15,}}
      />
      <View style={{position:'absolute',right:80,top:130,maxWidth:50}}>
      <Icon name="eye-slash"/>
      </View>
    </View>
    
      <View style={{width:'40%',borderRadius:18,top:130,left:100}}>
   <Button title='Create account' color="#59ABC9" type='submit' onPress={handlehome} required/>
   </View>
   <Text style={{top:150,left:250, textDecorationLine:'underline',color:"#59ABC9"}} onPress={()=>{handleRegister()}} > back login page</Text>
      </View>
  

    </View>
  )
}

export default Signupscreen

const styles = StyleSheet.create({})