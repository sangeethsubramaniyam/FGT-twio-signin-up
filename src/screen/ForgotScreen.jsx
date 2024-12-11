import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import axios from 'axios';

const ForgotScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }

    try {
      const response = await axios.post('http://10.0.2.2:3000/forgot-password', { email });

      if (response.status === 200) {
        Alert.alert('Success', 'Password reset token sent to your email.');
        navigation.navigate('Resetpassword');
      }
    } catch (error) {
      console.error('Forgot password error:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
          keyboardType="email-address"
        placeholder="Enter your email"
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Submit" onPress={handleForgotPassword} color='#59ABC9'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20,color:'#59ABC9',},
  input: { borderWidth: 1, padding: 10, marginBottom: 20 },
});

export default ForgotScreen;