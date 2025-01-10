// import { Text, View,TextInput,Button ,Alert,StyleSheet} from 'react-native'
// import React,{ useState} from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome'
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';


// const Signupscreen = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

// const navigation=useNavigation();
// const handleResigister = () =>{
//   navigation.navigate('Login')
// }

//   const handleSignup = async () => {

// if (!username || !email || !password) 
//   {
//        Alert.alert('Error', 'Please fill in all fields.');
//        return;
//      }
 
//      try {
//        const response = await axios.post('http://10.0.2.2:3000/signup', {
//          username,
//          email,
//          password,
//        });
 
//        if (response.status === 200) {
//          Alert.alert('Success', 'User registered successfully!');
//        } else {
//          Alert.alert('Error', 'Registration failed. Please try again later.');
//        }
//      } catch (error) {
//        console.error('Signup error:', error);
//        Alert.alert('Error', 'An error occurred. Please try again later.');
//      }
//    };
 
//   return (
//     <View>
        
//        <View style={{top:20}}>
//       <Text style={{fontSize:30,fontWeight:600,color:"#59ABC9",textAlign:'center',}}>LIMAT</Text>
//       <Text style={{fontSize:23,fontWeight:500,color:'black', left:30}}>Create Account</Text>
//       <Text style={{top:25,left:80,color:'black'}}>User Name :</Text>
// <TextInput type="text" placeholder='User Name' value={username}
//  onChangeText={setUsername}
// style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:40,borderRadius:12,}}
//       />
//        <Text style={{top:60,left:80,color:'black'}}>Email Address :</Text>
//        <TextInput type="text" placeholder='Enter Email Address' keyboardType='email'   value={email}
//         onChangeText={setEmail}

// style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:70,borderRadius:12,}}
//       />
//       <View>
//     <Text style={{top:80,left:80,color:'black'}}>Password :</Text>
//        <TextInput type="text" placeholder='enter password' secureTextEntry 
//           value={password}
//           onChangeText={setPassword}

// style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:90,borderRadius:15,}}
//       />
//       <View style={{position:'absolute',right:80,top:130,maxWidth:50}}>
//       <Icon name="eye-slash"/>
//       </View>
//     </View>
    
//       <View style={{width:'40%',borderRadius:18,top:130,left:100}}>
//    <Button title='Create account' color="#59ABC9" type='submit' onPress={handleSignup} required/>
//    </View>
  
//    <Text style={{top:150,left:250, textDecorationLine:'underline',color:"#59ABC9"}} onPress={()=>{handleResigister()}} > back login page</Text>
//       </View>
  

//     </View>
//   )
// }

// export default Signupscreen

// const styles = StyleSheet.create({

 
// }) 
//updated version

// import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
// import React, { useState } from 'react';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';

// const Signupscreen = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const navigation = useNavigation();

//   const handleRegister = () => {
//     navigation.navigate('Login');
//   };

//   // Validation function
//   const validateInputs = () => {
//     const newErrors = {};
//     if (!username) {
//       newErrors.username = 'Username is required';
//     }
//     if (!email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Invalid email format';
//     }
//     if (!password) {
//       newErrors.password = 'Password is required';
//     } else if (password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSignup = async () => {
//     if (!validateInputs()) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://10.0.2.2:3000/signup', {
//         username,
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         Alert.alert('Success', 'User registered successfully!');
//       } else {
//         Alert.alert('Error', 'Registration failed. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Signup error:', error);
//       Alert.alert('Error', 'An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <View>
//       <View style={{ top: 20 }}>
//         <Text style={{ fontSize: 30, fontWeight: 600, color: '#59ABC9', textAlign: 'center' }}>
//           LIMAT
//         </Text>
//         <Text style={{ fontSize: 23, fontWeight: 500, color: 'black', left: 30 }}>
//           Create Account
//         </Text>
//         <Text style={{ marginTop: 20, left: 80, color: 'black' }}>User Name :</Text>
//         <TextInput
//           placeholder="User Name"
//           value={username}
//           onChangeText={(text) => {
//             setUsername(text);
//             setErrors((prev) => ({ ...prev, username: '' }));
//           }}
//           style={styles.input}
//         />
//         {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

//         <Text style={{ marginTop: 20, left: 80, color: 'black' }}>Email Address :</Text>
//         <TextInput
//           placeholder="Enter Email Address"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={(text) => {
//             setEmail(text);
//             setErrors((prev) => ({ ...prev, email: '' }));
//           }}
//           style={styles.input}
//         />
//         {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

//         <Text style={{ marginTop: 20, left: 80, color: 'black' }}>Password :</Text>
//         <TextInput
//           placeholder="Enter password"
//           secureTextEntry
//           value={password}
//           onChangeText={(text) => {
//             setPassword(text);
//             setErrors((prev) => ({ ...prev, password: '' }));
//           }}
//           style={styles.input}
//         />
//         {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

//         <View style={{ width: '40%', borderRadius: 18, top: 130, left: 100 }}>
//           <Button title="Create account" color="#59ABC9" onPress={handleSignup} />
//         </View>

//         <Text
//           style={{ top: 150, left: 250, textDecorationLine: 'underline', color: '#59ABC9' }}
//           onPress={handleRegister}
//         >
//           back login page
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default Signupscreen;

// const styles = StyleSheet.create({
//   input: {
//     backgroundColor: '#fff',
//     width: '70%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     left: 70,
//     marginTop: 15,
//     borderRadius: 12,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     marginLeft: 80,
//     marginTop: 5,

//   },
// });
//
// ultra 
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Signupscreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Login');
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Username is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const response = await axios.post('http://10.0.2.2:3000/signup', {
        username,
        email,
        password,
      });

      if (response.status === 200) {
        Alert.alert('Success', 'User registered successfully!');
      } else {
        Alert.alert('Error', 'Registration failed. Please try again later.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  return (
    <View>
      <View style={{ top: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 600, color: '#59ABC9', textAlign: 'center' }}>
          LIMAT
        </Text>
        <Text style={{ fontSize: 23, fontWeight: 500, color: 'black', left: 30 }}>
          Create Account
        </Text>
        <Text style={{ marginTop: 20, left: 80, color: 'black' }}>User Name :</Text>
        <TextInput
          placeholder="User Name"
          value={username}
          onChangeText={(text) => {
            setUsername(text);
            setErrors((prev) => ({ ...prev, username: '' }));
          }}
          style={[
            styles.input,
            errors.username ? styles.inputError : null,
          ]}
        />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

        <Text style={{ marginTop: 20, left: 80, color: 'black' }}>Email Address :</Text>
        <TextInput
          placeholder="Enter Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErrors((prev) => ({ ...prev, email: '' }));
          }}
          style={[
            styles.input,
            errors.email ? styles.inputError : null,
          ]}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Text style={{ marginTop: 20, left: 80, color: 'black' }}>Password :</Text>
        <TextInput
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setErrors((prev) => ({ ...prev, password: '' }));
          }}
          style={[
            styles.input,
            errors.password ? styles.inputError : null,
          ]}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <View style={{ width: '40%', borderRadius: 18, top: 130, left: 100 }}>
          <Button title="Create account" color="#59ABC9" onPress={handleSignup} />
        </View>

        <Text
          style={{ top: 150, left: 250, textDecorationLine: 'underline', color: '#59ABC9' }}
          onPress={handleRegister}
        >
          back login page
        </Text>
      </View>
    </View>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    left: 70,
    marginTop: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc', // Default border color
    padding: 10,
  },
  inputError: {
    borderColor: 'red', // Red border for errors
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 80,
    marginTop: 5,
  },
});
