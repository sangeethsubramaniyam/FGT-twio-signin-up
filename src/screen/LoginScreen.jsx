import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View,Text, TextInput,Button } from 'react-native'

const LoginScreen = () => {
  const navigation =useNavigation();
  const handleSignup =() =>{
    navigation.navigate("Signup");
  }
      
  return (
    <View style={{top:80}}>
      <Text style={{fontSize:30,fontWeight:600,color:"#59ABC9",textAlign:'center'}}>LIMAT</Text>
<TextInput type="text" placeholder='Email' keyboardType='email-address'
style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:40,borderRadius:12,}}
      />
       <TextInput type="text" placeholder='password' secureTextEntry
style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:80,borderRadius:12,}}
      />
    
    
      <View style={{width:'40%',borderRadius:18,top:100,left:100}}>
   <Button title='submit' color="#59ABC9" type='submit'/>
   </View>
   <Text style={{top:110,left:100}}> you don't have account </Text>
   <Text style={{top:115,left:150, textDecorationLine:'underline'}} onPress={handleSignup}>signup?</Text>
      </View>
  ) 
}

export default LoginScreen

const styles = StyleSheet.create({

}) 