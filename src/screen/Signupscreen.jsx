
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
    } 
    else {
      // Check for at least one uppercase letter, one special character, and one number
      if (!/[A-Z]/.test(password)) {
        newErrors.password = 'Password must contain at least one uppercase letter';
      } else if (!/\d/.test(password)) {
        newErrors.password = 'Password must contain at least one number';
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        newErrors.password = 'Password must contain at least one special character';
      } else if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
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
        setUsername('');
        setEmail('');
        setPassword('');
        setErrors({});
      
      
      } else {
        Alert.alert('Error', 'Registration failed. Please try again later.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      
      if (error.response && error.response.data.message) {
        const message = error.response.data.message;

      if(message=='Username already exists.'){
        setErrors((prev) => ({ ...prev, username: message })); 
      } else if (message === 'Email already exists.') {
        setErrors((prev) => ({ ...prev, email: message }));
      } else {
        Alert.alert('Error', message);
      }
     } else {
      Alert.alert('Error', 'An error occurred. Please try again later.');
  }
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
    borderColor: 'red', 
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 80,
    marginTop: 5,
  },
})
