import { Text, View,TextInput,Button ,Alert } from 'react-native'
import React,{ useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

import axios from 'axios';


const Signupscreen = () => {
  const navigation =useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup 
 = async () => {
  if (!username || !email || !password) {
    Alert.alert('Error', 'Please fill all the fields.');
    return; // Stop further execution if any field is empty
  }

    try {
      const response = await axios.post('http://10.0.2.2:3000/signup',   
 { // Ensure correct URL
        username,
        email,
        password,
      });

      // const data = await response.json();
      const data = response.data;

      if (response.status === 200) //0k
      
      {
        // Handle successful signup 
        console.log('Signup successful:', data);
        Alert.alert('Success', 'User registered successfully');
        navigation.navigate('Login')
        // Navigate to the next screen or show a success message
      } else {
        // Handle error response
        console.error('Signup failed:', data.error);
        Alert.alert('Error', 'Something went wrong. Please try again.');

        // Display an error message to the user
      }
    } catch (error) {
      console.error('Error:', error.message);
      Alert.alert('Error', 'Something went wrong. Please try again.');
      // Display an error message to the user
    }
  };
  return (
    <View>
        
       <View style={{top:50}}>
      <Text style={{fontSize:30,fontWeight:600,color:"#59ABC9",textAlign:'center',}}>LIMAT</Text>
      <Text style={{fontSize:23,fontWeight:500,color:'black', left:30}}>Create Account</Text>
      <Text style={{top:25,left:80,color:'black'}}>User Name :</Text>
<TextInput type="text" placeholder='User Name' value={username}
 onChangeText={setUsername}
style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:40,borderRadius:12,}}
      />
       <Text style={{top:60,left:80,color:'black'}}>Email Address :</Text>
       <TextInput type="text" placeholder='Enter Email Address' keyboardType='email'   value={email}
        onChangeText={setEmail}

style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:70,borderRadius:12,}}
      />
      <View>
    <Text style={{top:80,left:80,color:'black'}}>Password :</Text>
       <TextInput type="text" placeholder='enter password' secureTextEntry 
          value={password}
          onChangeText={setPassword}

style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:90,borderRadius:15,}}
      />
      <View style={{position:'absolute',right:80,top:130,maxWidth:50}}>
      <Icon name="eye-slash"/>
      </View>
    </View>
    
      <View style={{width:'40%',borderRadius:18,top:130,left:100}}>
   <Button title='Create account' color="#59ABC9" type='submit' onPress={handleSignup} required/>
   </View>
   <Text style={{top:150,left:250, textDecorationLine:'underline',color:"#59ABC9"}} onPress={()=>{handleRegister()}} > back login page</Text>
      </View>
  

    </View>
  )
}

export default Signupscreen

// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert } from 'react-native';
// import { signup } from './api'; // Import the signup function from api.js

// const SignUpscreen = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // Function to handle signup
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   return (
//     <View>
//       {/* Input fields for username, email, and password */}
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
      
//       {/* Signup button */}
//       <Button title="Sign Up" onPress={handleSignup} />
//     </View>
//   );
// };

// export default SignUpscreen;
