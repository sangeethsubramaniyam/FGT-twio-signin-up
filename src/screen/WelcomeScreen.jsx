import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Header'
import { useNavigation } from '@react-navigation/native'
import Footer from '../Footer'


const WelcomeScreen = () => {
  const navigation=useNavigation();
  const handleGuest=()=>{
    navigation.navigate('GuestMode')
  }
  const handlelogi=()=>{
    navigation.navigate('Login')
  }
  const handlesubmi=()=>{
    navigation.navigate("Signup")
  }
  return (
    <View style={{backgroundColor:"#59ABC9",flex:1}}>
    <Header/>
    <Text style={styles.weltext}>WELCOME TO LIMAT</Text>
   
    <Text style={styles.gueText} onPress={()=>handleGuest()}>Continue As Guest</Text>
    
    <View>
      <Pressable style={styles.logibut} onPress={handlelogi}>
        <Text style={{ color:"#59ABC9"}}> Already have an account? LOGIN</Text>
      </Pressable>
      <Pressable  onPress={handlesubmi}>
        <Text style={{ color:"#fff",textAlign:'center',textDecorationLine:'underline',top:220}}> New? Register Here !</Text>
      </Pressable>
    </View>
<Footer/>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  weltext:{
    fontSize:25,
    textAlign:'center',
    top:50,
    fontWeight:'500',
   
    color:'#e8f0ff'

  },
  gueText:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'400',
    textShadowColor:'#A2A1B4',
    textShadowRadius:10,
    textShadowOffset:{width:5,height:3},
    color:'#fff',
    top:90,
    left:100,
    borderWidth:1,
    borderColor:'#fff',
    borderRadius:10,
    width:200,

  },
  logibut:{
    borderWidth:2,
      borderColor:'#fff',
      width:250,
      padding:18,
      top:170,
      left:80,
      backgroundColor:'#fff',
      borderRadius:5,
     

  }
})