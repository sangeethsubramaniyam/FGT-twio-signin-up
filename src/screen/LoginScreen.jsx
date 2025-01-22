
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, Pressable,Modal } from 'react-native';
import GoogleScreen from './GoogleScreen';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

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
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters.');
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
       {/* First Login Form */}
       
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
      {/* Limat Account Text */}
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.limatAccountText}>Add Limat Account</Text>
      </Pressable>
        {/* Modal for "Login into another account" and "Create a new account" */}
        <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Choose an option</Text>
            <Pressable style={styles.modalButton} onPress={() => alert('Login into another account')}>
              <Text style={styles.modalButtonText}>Login into another account</Text>
            </Pressable>
             {/* First Login Form */}
           
            <Pressable style={styles.modalButton} onPress={() => alert('Create a new account')}>
              <Text style={styles.modalButtonText}>Create a new account</Text>
            </Pressable>
            <Pressable
              style={styles.modalCloseButton}
              onPress={() => {
                setModalVisible(false);  // Close the modal
                navigation.navigate('Signup'); // Navigate to the signup page
              }}
            >
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
  accountOptions: {
    marginTop: 20,
    alignItems: 'center',
  },
  switchAccount: {
    color: '#59ABC9',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  limatAccountText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#59ABC9',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  modalButton: {
    marginBottom: 10,
    backgroundColor: '#59ABC9',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: 'black',
    fontSize: 16,
  },
  switchAccountText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#59ABC9',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});
 
// import { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, Button, Alert, Pressable, Modal } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [secondUsername, setSecondUsername] = useState('');
//   const [secondPassword, setSecondPassword] = useState('');
//   const [secondUsernameError, setSecondUsernameError] = useState('');
//   const [secondPasswordError, setSecondPasswordError] = useState('');
//   const [isSecondFormVisible, setIsSecondFormVisible] = useState(false); // Track second form visibility
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

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
//     } else if (password.length < 8) {
//       setPasswordError('Password must be at least 8 characters.');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     return isValid;
//   };

//   const validateSecondInputs = () => {
//     let isValid = true;

//     if (!secondUsername) {
//       setSecondUsernameError('Username is required.');
//       isValid = false;
//     } else if (secondUsername.length < 3) {
//       setSecondUsernameError('Username must be at least 3 characters.');
//       isValid = false;
//     } else {
//       setSecondUsernameError('');
//     }

//     if (!secondPassword) {
//       setSecondPasswordError('Password is required.');
//       isValid = false;
//     } else if (secondPassword.length < 8) {
//       setSecondPasswordError('Password must be at least 8 characters.');
//       isValid = false;
//     } else {
//       setSecondPasswordError('');
//     }

//     return isValid;
//   };

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
//         setIsLoggedIn(true);
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

//   const handleSecondLogin = async () => {
//     if (!validateSecondInputs()) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://10.0.2.2:3000/login', {
//         username: secondUsername,
//         password: secondPassword,
//       });

//       if (response.status === 200) {
//         setIsLoggedIn(true);
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

//   const handleSwitchAccount = () => {
//     setIsSecondFormVisible(true);  // Show the second login form
//   };

//   return (
//     <View>
//       <Text style={styles.title}>LIMAT</Text>

//       {/* First Login Form */}
//       {!isSecondFormVisible && !isLoggedIn && (
//         <>
//           <TextInput
//             placeholder="Username"
//             style={[styles.input, usernameError && { borderColor: 'red', borderWidth: 2 }]}
//             onChangeText={setUsername}
//             value={username}
//           />
//           {usernameError ? <Text style={styles.error}>{usernameError}</Text> : null}

//           <TextInput
//             placeholder="Password"
//             secureTextEntry
//             style={[styles.input, passwordError && { borderColor: 'red', borderWidth: 2 }]}
//             onChangeText={setPassword}
//             value={password}
//           />
//           {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

//           <View style={styles.loginButton}>
//             <Button title="Login" color="#59ABC9" onPress={handleLogin} />
//           </View>

//           <Pressable>
//             <Text style={styles.forgotPassword} onPress={handleForgot}>
//               Forgot Password?
//             </Text>
//           </Pressable>

//           <View style={styles.orSeparator}>
//             <View style={styles.line} />
//             <Text style={styles.orText}>OR</Text>
//             <View style={styles.line} />
//           </View>

//           <Pressable>
//             <Text
//               style={styles.loginWithPhone}
//               onPress={() => navigation.navigate('phonenumber')}
//             >
//               Login with phone number
//             </Text>
//             <View style={{ marginLeft: 100, marginTop: 30 }}>
//               {/* Replace with your Google login component */}
//             </View>
//           </Pressable>

//           <View style={{ flexDirection: 'row', top: 10 }}>
//             <Text style={{ top: 90, left: 100 }}>You don't have an account</Text>
//             <Text style={styles.signupLink} onPress={handleSignup}>
//               Signup?
//             </Text>
//           </View>

//           <Pressable onPress={handleSwitchAccount}>
//             <Text style={styles.switchAccountText}>Login into another account</Text>
//           </Pressable>
//         </>
//       )}

//       {/* Second Login Form (When "Login into another account" is clicked) */}
//       {isSecondFormVisible && !isLoggedIn && (
//         <>
//           <TextInput
//             placeholder="Username"
//             style={[styles.input, secondUsernameError && { borderColor: 'red', borderWidth: 2 }]}
//             onChangeText={setSecondUsername}
//             value={secondUsername}
//           />
//           {secondUsernameError ? <Text style={styles.error}>{secondUsernameError}</Text> : null}

//           <TextInput
//             placeholder="Password"
//             secureTextEntry
//             style={[styles.input, secondPasswordError && { borderColor: 'red', borderWidth: 2 }]}
//             onChangeText={setSecondPassword}
//             value={secondPassword}
//           />
//           {secondPasswordError ? <Text style={styles.error}>{secondPasswordError}</Text> : null}

//           <View style={styles.loginButton}>
//             <Button title="Login" color="#59ABC9" onPress={handleSecondLogin} />
//           </View>

//           <Pressable>
//             <Text style={styles.forgotPassword} onPress={handleForgot}>
//               Forgot Password?
//             </Text>
//           </Pressable>
//         </>
//       )}
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
  // title: {
  //   fontSize: 30,
  //   fontWeight: '600',
  //   color: '#59ABC9',
  //   textAlign: 'center',
  // },
  // input: {
  //   backgroundColor: '#fff',
  //   width: '70%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   left: 70,
  //   marginTop: 50,
  //   borderRadius: 12,
  //   padding: 10,
  //   borderColor: '#ddd',
  //   borderWidth: 1,
  // },
  // error: {
  //   color: 'red',
  //   fontSize: 14,
  //   marginLeft: 70,
  //   marginTop: 10,
  // },
  // loginButton: {
  //   width: '40%',
  //   borderRadius: 18,
  //   marginTop: 50,
  //   left: 120,
  // },
  // forgotPassword: {
  //   marginTop: 45,
  //   marginLeft: 230,
  //   color: '#59ABC9',
  //   fontSize: 17,
  // },
  // orSeparator: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginVertical: 20,
  //   width: '100%',
  //   top: 10,
  // },
  // line: {
  //   flex: 1,
  //   height: 1,
  //   backgroundColor: '#ddd',
  // },
  // orText: {
  //   marginHorizontal: 10,
  //   fontWeight: 'bold',
  //   color: '#888',
  // },
  // loginWithPhone: {
  //   fontSize: 16,
  //   textAlign: 'center',
  //   fontWeight: '400',
  //   color: '#59ABC9',
  //   borderRadius: 10,
  //   width: 200,
  //   borderWidth: 2,
  //   borderColor: '#59ABC9',
  //   padding: 5,
  //   marginLeft: 110,
  //   marginTop: 30,
  // },
  // signupLink: {
  //   top: 90,
  //   left: 110,
  //   textDecorationLine: 'underline',
  //   color: '#59ABC9',
  // },
  // switchAccountText: {
  //   fontSize: 16,
  //   textAlign: 'center',
  //   color: '#59ABC9',
  //   textDecorationLine: 'underline',
  //   marginTop: 20,
  // },
// });
//

