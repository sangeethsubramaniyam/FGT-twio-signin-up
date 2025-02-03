
import { Modal, TouchableOpacity } from 'react-native'; // Add this import
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, Pressable } from 'react-native';
import { useUser } from '../assets/UserContext';
import GoogleScreen from './GoogleScreen';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons


const LoginScreen = () => {
  const { login } = useUser(); // Access login function

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility

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
    if (!validateInputs()) return;

    try {
      const response = await axios.post('http://10.0.2.2:3000/login', {
        username,
        password,
      });

      if (response.status === 200) {
        login({ username }); // Pass the user data into context on successful login

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

  const sendOtp = async () => {
    if (!phoneNumber || phoneNumber.length < 10) return Alert.alert('Error', 'Enter a valid phone number');
    try {
      const response = await axios.post('http://10.0.2.2:3000/send-otpo', { phoneNumber });
      if (response.data.success) {
        setIsOtpSent(true);
        Alert.alert('Success', 'OTP sent to your WhatsApp');
      } else {
        Alert.alert('Error', 'Failed to send OTP');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to send OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/verify-otpo', { phoneNumber, otp });
      if (response.data.success) {
        login({ phoneNumber });
        Alert.alert('Success', 'WhatsApp login successful!');
        navigation.navigate('Home', { phoneNumber });
      } else {
        Alert.alert('Error', 'Invalid OTP');
      }
    } catch (error) {
      Alert.alert('Error', 'OTP verification failed');
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible); // Toggle modal visibility
  };

  return (
    <View>
      <Text style={styles.title}>LIMAT</Text>

      <TextInput
        placeholder="Username"
        style={[styles.input, usernameError && { borderColor: 'red', borderWidth: 2 }]}
        onChangeText={setUsername}
        value={username}
      />
      {usernameError ? <Text style={styles.error}>{usernameError}</Text> : null}

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.input, passwordError && { borderColor: 'red', borderWidth: 2 }]}
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

      <Pressable onPress={toggleModal}> 
      <Icon name="whatsapp" size={20} color="#59ABC9" style={styles.icon} />
        
        <Text style={styles.loginWithPhone}>Login with WhatsApp</Text>
      </Pressable>

      {/* Modal for Phone Login */}
      <Modal 
        visible={isModalVisible} 
        transparent={true} 
        animationType="fade" 
        onRequestClose={toggleModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TextInput 
              placeholder=" Enter your Whatsapp Number" 
              keyboardType="phone-pad" 
              style={styles.inputwhatsappnumber} 
              onChangeText={setPhoneNumber} 
              value={phoneNumber} 
            />
            <Pressable onPress={sendOtp}>
              <Text style={styles.loginWithsubmit}>Send OTP</Text>
            </Pressable>
            {isOtpSent && (
              <>
                <TextInput 
                  placeholder="Enter OTP" 
                  keyboardType="number-pad" 
                  style={styles.inputwhatsappnumber} 
                  onChangeText={setOtp} 
                  value={otp} 
                />
                <Pressable onPress={verifyOtp}>
                  <Text style={styles.loginWithsubmit}>Verify OTP</Text>
                </Pressable>
              </>
            )}
            <Pressable onPress={toggleModal}>
              <Text style={styles.loginWithsubmit}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={{ marginLeft: 100, marginTop: 30 }}>
        <GoogleScreen />
      </View>
      <Pressable>
        <Text
          style={styles.loginWithPhone}
          onPress={() => navigation.navigate('phonenumber')}
        >
          Login with phone number
        </Text>
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
  inputwhatsappnumber: {
    backgroundColor: '#fff',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    left: 20,
    marginTop: 50,
    borderRadius: 12,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 3,
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
    fontWeight: '40',
    color: '#59ABC9',
    borderRadius: 10,
    width: '100%',
    borderWidth: 2,
    borderColor: '#59ABC9',
    padding: 5,
    marginLeft: 100,
    marginTop: 30,
    width:'60%',
  },
  loginWithsubmit: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '40',
    color: '#59ABC9',
    borderRadius: 10,
    width: '100%',
    borderWidth: 2,
    borderColor: '#59ABC9',
    padding: 5,
    marginLeft: 10,
    marginTop: 30,
    width:'60%',
  },
  signupLink: {
    top: 90,
    left: 110,
    textDecorationLine: 'underline',
    color: '#59ABC9',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
width:'100%',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
width:'90%'

  },
  icon:{
    top:57,
    left:115
  }

});
