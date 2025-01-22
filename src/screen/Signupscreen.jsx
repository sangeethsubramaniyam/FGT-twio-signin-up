
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Signupscreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const emailRef = useRef();
  const passwordRef = useRef();

  const validatePassword = () => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };
const handleLogin =() =>{
  navigation.navigate('Login')
}
  const handleInputChange = (field, value) => {
    if (field === 'username') setUsername(value);
    if (field === 'email') setEmail(value);
    if (field === 'password') setPassword(value);

    // Clear specific field errors dynamically
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleFieldValidation = (field) => {
    const newErrors = { ...errors };
    if (field === 'username' && !username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (field === 'email' && !email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (field === 'password') {
      const passwordValidation = validatePassword();
      if (!password.trim()) {
        newErrors.password = 'Password is required';
      } else if (!passwordValidation.length) {
        newErrors.password = 'Password must be at least 8 characters long';
      } else if (!passwordValidation.uppercase) {
        newErrors.password = 'Password must contain at least one uppercase letter';
      } else if (!passwordValidation.number) {
        newErrors.password = 'Password must contain at least one number';
      } else if (!passwordValidation.specialChar) {
        newErrors.password = 'Password must contain at least one special character';
      }
    }

    setErrors(newErrors);

    // Focus back to the current field if there's an error
    if (newErrors.username && field === 'username') {
      return true; // Keep focus on username
    }
    return false;
  };

  const handleSignup = async () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Username is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    const passwordValidation = validatePassword();
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!passwordValidation.length) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!passwordValidation.uppercase) {
      newErrors.password = 'Password must contain at least one uppercase letter';
    } else if (!passwordValidation.number) {
      newErrors.password = 'Password must contain at least one number';
    } else if (!passwordValidation.specialChar) {
      newErrors.password = 'Password must contain at least one special character';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://10.0.2.2:3000/signup', {
          username,
          email,
          password,
        });

        if (response.status === 200) {
          Alert.alert('Success', 'User registered successfully!');
          setUsername('');
          setEmail('');
          setPassword('');
          setErrors({});
        } else {
          Alert.alert('Error', 'Registration failed. Please try again later.');
        }
      } catch (error) {
        console.error('Signup error:', error);
        Alert.alert('Error', 'An error occurred. Please try again later.');
      }
    }
  };

  const passwordValidation = validatePassword();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>LIMAT</Text>
      <Text style={styles.subHeader}>Create Account</Text>

      <View>
        <Text style={styles.label}>User Name:</Text>
        <TextInput
          placeholder={errors.username ? 'Required *' : 'User Name'}
          placeholderTextColor={errors.username ? 'red' : '#999'}
          value={username}
          onChangeText={(text) => handleInputChange('username', text)}
          onBlur={() => handleFieldValidation('username')}
          onSubmitEditing={() => {
            if (!handleFieldValidation('username')) {
              emailRef.current.focus();
            }
          }}
          style={[styles.input, errors.username ? styles.inputError : null]}
          returnKeyType="next"
        />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

        <Text style={styles.label}>Email Address:</Text>
        <TextInput
          ref={emailRef}
          placeholder="Enter Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => handleInputChange('email', text)}
          onBlur={() => handleFieldValidation('email')}
          onSubmitEditing={() => passwordRef.current.focus()}
          style={[styles.input, errors.email ? styles.inputError : null]}
          returnKeyType="next"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Text style={styles.label}>Password:</Text>
        <TextInput
          ref={passwordRef}
          placeholder="Enter Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => handleInputChange('password', text)}
          onBlur={() => handleFieldValidation('password')}
          style={[styles.input, errors.password ? styles.inputError : null]}
        />
        <View style={styles.validationList}>
          <Text style={[styles.validationText, passwordValidation.length ? styles.valid : styles.invalid]}>
            ● At least 8 characters
          </Text>
          <Text style={[styles.validationText, passwordValidation.uppercase ? styles.valid : styles.invalid]}>
            ● One uppercase letter
          </Text>
          <Text style={[styles.validationText, passwordValidation.number ? styles.valid : styles.invalid]}>
            ● One number
          </Text>
          <Text style={[styles.validationText, passwordValidation.specialChar ? styles.valid : styles.invalid]}>
            ● One special character
          </Text>
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      </View>

      <Button title="Create Account" color="#59ABC9" onPress={handleSignup} />
      
         <Text
         style={{ marginTop: 100, marginLeft: 230, textDecorationLine: 'underline', color: '#59ABC9' }}
         onPress={handleLogin}
      >back login page
        </Text>
    </ScrollView>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 30,
    fontWeight: '600',
    color: '#59ABC9',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 23,
    fontWeight: '500',
    color: 'black',
    marginVertical: 10,
  },
  label: {
    color: 'black',
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  validationList: {
    marginVertical: 10,
  },
  validationText: {
    fontSize: 12,
  },
  valid: {
    color: 'green',
  },
  invalid: {
    color: 'red',
  },
});
