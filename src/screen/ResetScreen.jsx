import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import axios from 'axios';

const ResetScreen = ({ navigation }) => {
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = async () => {
    if (!token || !newPassword) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    try {
      const response = await axios.post('http://10.0.2.2:3000/reset-password', { token, newPassword });

      if (response.status === 200) {
        Alert.alert('Success', 'Password reset successful!', [
          { text: 'OK', onPress: () => navigation.navigate('Login') }
        ]);
      }
    } catch (error) {
      console.error('Reset password error:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your reset token"
        onChangeText={setToken}
        value={token}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        secureTextEntry
        onChangeText={setNewPassword}
        value={newPassword}
      />
      <Button title="Reset Password" onPress={handleResetPassword} color='#59ABC9'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20 ,color:'#59ABC9'},
  input: { borderWidth: 1, padding: 10, marginBottom: 20 },
});

export default ResetScreen;