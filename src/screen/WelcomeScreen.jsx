import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Footer from '../Footer'
import LockHome from '../LockHome'


const WelcomeScreen = () => {

  
const navigation=useNavigation();
  const handlelogi = () => {
    navigation.navigate('Login')
  };
  const handlesubmi = () => {
    navigation.navigate("Signup")
  };
  const magicGuest = () => {
    navigation.navigate('Guestpage')
  };
  // const magicadmin =() => {
  //   navigation.navigate('admin')
  // };
  return (
    <View style={{backgroundColor:"#59ABC9",flex:1}}>
    <LockHome/>
    <Text style={styles.weltext}>WELCOME TO LIMAT TECHNOLOGY SOLUTIONS</Text>
 <Pressable  >
    <Text style={styles.gueText} onPress={magicGuest}>Continue As Guest
    </Text>
    </Pressable>
   
      
        <Text style={styles.logibut} onPress={handlelogi}> Already have an account? LOGIN</Text>
     
      <Pressable>
        <Text style={{ color:"#fff",textAlign:'center',textDecorationLine:'underline',top:220,fontSize:18}} onPress={handlesubmi}> New? Register Here !</Text>
      </Pressable>
  {/* <View>
    <Text onPress={magicadmin}                            >admin user</Text>
  </View> */}
<Footer/>

    </View>

  )
};

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
    color:'#fff',
    borderRadius:10,
    width:200,
    // textDecorationLine:'underline',
    borderWidth: 2,   
    borderColor: '#fff',
    padding: 5,     
    marginLeft:95,
    marginTop:100,
  },
  logibut:{
      width:250,
      padding:18,
      top:100,
      left:80,
      backgroundColor:'#fff',
      borderRadius:5,
     color:"#59ABC9"

  }
})