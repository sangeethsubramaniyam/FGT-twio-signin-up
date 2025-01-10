
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import { useState } from 'react';
// import { StyleSheet, View,Text, TextInput,Button,Alert,Pressable } from 'react-native'
// import GoogleScreen from './GoogleScreen';
// // import GoogleLogin from '../GoogleSignIn';
// // import GoogleSigninScreen from '../GoogleSigninScreen';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  

//   const navigation =useNavigation();
//   const handleSignup =() =>{
//     navigation.navigate("Signup");
//   }
//   const handleForgot =() =>{
//     navigation.navigate("Forgot");
//   }
//   //login
//   const handleLogin = async () => {
//     if (!username || !password) {
//       Alert.alert('Error', 'Please enter your username and password.');
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://10.0.2.2:3000/login', {
//         username,
//         password,
//       });
  
//       if (response.status === 200) {
//         Alert.alert('Success', 'Login successful!', [
//           {
//             text: 'OK',
//             onPress: () => navigation.navigate('Home', { user: response.data.user }),
//           },
//         ]);
//       } else if (response.status === 401) {
//         Alert.alert('Error', 'Invalid username or password.');
//       } else {
//         Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
//     }
//   };
//   return (
//     <View style={{}}>
//       <Text style={{fontSize:30,fontWeight:600,color:"#59ABC9",textAlign:'center'}}>LIMAT</Text>
// <TextInput type="text" placeholder='Username'
// style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:40,borderRadius:12,}} onChangeText={setUsername}
// value={username}
//       />
//        <TextInput type="text" placeholder='password' secureTextEntry
// style={{backgroundColor:'#fff',width:'70%',justifyContent:'center',alignItems:'center',left:70,top:60,borderRadius:12,}}  onChangeText={setPassword}
// value={password}
// />
//       <View style={{width:'40%',borderRadius:18,marginTop:100,left:120}}
//       >
//    <Button title='Login' color="#59ABC9" type='submit' onPress={handleLogin}/>
//    </View>
//    <Pressable>
//    <Text style={{marginTop:65,marginLeft:230,color:'#59ABC9',fontSize:17}} onPress={handleForgot}>Forgot Password?</Text>
//    </Pressable>
//    <View style={styles.orSeparator}>
//         <View style={styles.line} />
//         <Text style={styles.orText}>OR</Text>
//         <View style={styles.line} />
//       </View>

//       <Pressable>
//     <Text style={styles.loginphone} onPress={()=>navigation.navigate('phonenumber')}>login with phone number
//     </Text>
//     <View style ={{marginLeft:100,marginTop:40
//     }}>
//      <GoogleScreen/>
//     </View>
//     </Pressable>
//     <View style={{flexDirection:'row',top:50}}>
//    <Text style={{top:110,left:100}}> you don't have account </Text>
//    <Text style={{top:110,left:110, textDecorationLine:'underline',color:'#59ABC9'}} onPress={handleSignup}>signup?</Text>
//       </View>
//       </View>
// )
// }

// export default LoginScreen

// const styles = StyleSheet.create({
//   orSeparator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//     width: '100%',
//     top:10
//   },
//   line: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#ddd',
//   },
//   orText: {
//     marginHorizontal: 10,
//     fontWeight: 'bold',
//     color: '#888',
//   },
//   loginphone:{
//     fontSize:16,
//     textAlign:'center',
//     fontWeight:'400',
//      color:"#59ABC9",
//     borderRadius:10,
//     width:200,
//     // textDecorationLine:'underline',
//     borderWidth: 2,   
//     borderColor: '#59ABC9',
//     padding: 5,     
//     marginLeft:110,
//     marginTop:30,
//   },
// }) 
//update version

// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, Button, Alert, Pressable } from 'react-native';
// import GoogleScreen from './GoogleScreen';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const navigation = useNavigation();

//   const handleSignup = () => {
//     navigation.navigate('Signup');
//   };

//   const handleForgot = () => {
//     navigation.navigate('Forgot');
//   };

//   const validateInputs = () => {
//     let isValid = true;

//     if (!username) {
//       setUsernameError('Username is required.');
//       isValid = false;
//     } else if (username.length < 3) {
//       setUsernameError('Username must be at least 3 characters.');
//       isValid = false;
//     } else {
//       setUsernameError('');
//     }

//     if (!password) {
//       setPasswordError('Password is required.');
//       isValid = false;
//     } else if (password.length < 6) {
//       setPasswordError('Password must be at least 6 characters.');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     return isValid;
//   };

//   // Login
//   const handleLogin = async () => {
//     if (!validateInputs()) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://10.0.2.2:3000/login', {
//         username,
//         password,
//       });

//       if (response.status === 200) {
//         Alert.alert('Success', 'Login successful!', [
//           {
//             text: 'OK',
//             onPress: () => navigation.navigate('Home', { user: response.data.user }),
//           },
//         ]);
//       } else if (response.status === 401) {
//         Alert.alert('Error', 'Invalid username or password.');
//       } else {
//         Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
//     }
//   };

//   return (
//     <View>
//       <Text style={styles.title}>LIMAT</Text>
//       <TextInput
//         placeholder="Username"
//         style={styles.input}
//         onChangeText={setUsername}
//         value={username}
//       />
//       {usernameError ? <Text style={styles.error}>{usernameError}</Text> : null}

//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         style={styles.input}
//         onChangeText={setPassword}
//         value={password}
//       />
//       {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

//       <View style={styles.loginButton}>
//         <Button title="Login" color="#59ABC9" onPress={handleLogin} />
//       </View>

//       <Pressable>
//         <Text style={styles.forgotPassword} onPress={handleForgot}>
//           Forgot Password?
//         </Text>
//       </Pressable>

//       <View style={styles.orSeparator}>
//         <View style={styles.line} />
//         <Text style={styles.orText}>OR</Text>
//         <View style={styles.line} />
//       </View>

//       <Pressable>
//         <Text
//           style={styles.loginWithPhone}
//           onPress={() => navigation.navigate('phonenumber')}
//         >
//           Login with phone number
//         </Text>
//         <View style={{ marginLeft: 100, marginTop: 40 }}>
//           <GoogleScreen />
//         </View>
//       </Pressable>

//       <View style={{ flexDirection: 'row', top: 50 }}>
//         <Text style={{ top: 110, left: 100 }}>You don't have an account</Text>
//         <Text
//           style={styles.signupLink}
//           onPress={handleSignup}
//         >
//           Signup?
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 30,
//     fontWeight: '600',
//     color: '#59ABC9',
//     textAlign: 'center',
//   },
//   input: {
//     backgroundColor: '#fff',
//     width: '70%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     left: 70,
//     marginTop: 50,
//     borderRadius: 12,
//     padding: 10,
//   },
//   error: {
//     color: 'red',
//     fontSize: 14,
//     marginLeft: 70,
//     marginTop: 10,
//   },
//   loginButton: {
//     width: '40%',
//     borderRadius: 18,
//     marginTop: 100,
//     left: 120,
//   },
//   forgotPassword: {
//     marginTop: 65,
//     marginLeft: 230,
//     color: '#59ABC9',
//     fontSize: 17,
//   },
//   orSeparator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//     width: '100%',
//     top: 10,
//   },
//   line: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#ddd',
//   },
//   orText: {
//     marginHorizontal: 10,
//     fontWeight: 'bold',
//     color: '#888',
//   },
//   loginWithPhone: {
//     fontSize: 16,
//     textAlign: 'center',
//     fontWeight: '400',
//     color: '#59ABC9',
//     borderRadius: 10,
//     width: 200,
//     borderWidth: 2,
//     borderColor: '#59ABC9',
//     padding: 5,
//     marginLeft: 110,
//     marginTop: 30,
//   },
//   signupLink: {
//     top: 110,
//     left: 110,
//     textDecorationLine: 'underline',
//     color: '#59ABC9',
//   },
// });
//
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, Pressable } from 'react-native';
import GoogleScreen from './GoogleScreen';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation();

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleForgot = () => {
    navigation.navigate('Forgot');
  };

  const validateInputs = () => {
    let isValid = true;

    if (!username) {
      setUsernameError('Username is required.');
      isValid = false;
    } else if (username.length < 3) {
      setUsernameError('Username must be at least 3 characters.');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLogin = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const response = await axios.post('http://10.0.2.2:3000/login', {
        username,
        password,
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Login successful!', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Home', { user: response.data.user }),
          },
        ]);
      } else if (response.status === 401) {
        Alert.alert('Error', 'Invalid username or password.');
      } else {
        Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <View>
      <Text style={styles.title}>LIMAT</Text>
      <TextInput
        placeholder="Username"
        style={[
          styles.input,
          usernameError && { borderColor: 'red', borderWidth: 2 },
        ]}
        onChangeText={setUsername}
        value={username}
      />
      {usernameError ? <Text style={styles.error}>{usernameError}</Text> : null}

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[
          styles.input,
          passwordError && { borderColor: 'red', borderWidth: 2 },
        ]}
        onChangeText={setPassword}
        value={password}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      <View style={styles.loginButton}>
        <Button title="Login" color="#59ABC9" onPress={handleLogin} />
      </View>

      <Pressable>
        <Text style={styles.forgotPassword} onPress={handleForgot}>
          Forgot Password?
        </Text>
      </Pressable>

      <View style={styles.orSeparator}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      <Pressable>
        <Text
          style={styles.loginWithPhone}
          onPress={() => navigation.navigate('phonenumber')}
        >
          Login with phone number
        </Text>
        <View style={{ marginLeft: 100, marginTop: 30 }}>
          <GoogleScreen />
        </View>
      </Pressable>

      <View style={{ flexDirection: 'row', top: 10 }}>
        <Text style={{ top: 90, left: 100 }}>You don't have an account</Text>
        <Text
          style={styles.signupLink}
          onPress={handleSignup}
        >
          Signup?
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#59ABC9',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    left: 70,
    marginTop: 50,
    borderRadius: 12,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginLeft: 70,
    marginTop: 10,
  },
  loginButton: {
    width: '40%',
    borderRadius: 18,
    marginTop: 50,
    left: 120,
  },
  forgotPassword: {
    marginTop: 45,
    marginLeft: 230,
    color: '#59ABC9',
    fontSize: 17,
  },
  orSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
    top: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#888',
  },
  loginWithPhone: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
    color: '#59ABC9',
    borderRadius: 10,
    width: 200,
    borderWidth: 2,
    borderColor: '#59ABC9',
    padding: 5,
    marginLeft: 110,
    marginTop: 30,
  },
  signupLink: {
    top: 90,
    left: 110,
    textDecorationLine: 'underline',
    color: '#59ABC9',
  },
});
