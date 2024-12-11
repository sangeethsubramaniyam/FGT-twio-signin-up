// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const phoneotpScreen = () => {
//   return (
//     <View>
    
//     </View>
//   )
// }

// export default phoneotpScreen

// const styles = StyleSheet.create({})
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const PhoneotpScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');

    const navigation = useNavigation();

    const sendOtp = async () => {
        try {
            const response = await axios.post('http://10.0.2.2:3000/send-otp', { phoneNumber });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.error || 'Failed to send OTP');
        }
    };

    const verifyOtp = async () => {
        try {
            const response = await axios.post('http://10.0.2.2:3000/verify-otp', { phoneNumber, otp });
            setMessage(response.data.message);//;
            if (response.data.message === 'Verification successful!') {
                navigation.navigate('Home'); // Navigate to Home if OTP is valid
            } else {
                setMessage('Invalid OTP, please try again.');
            }
        } catch (error) {
            setMessage(error.response?.data?.error || 'Failed to verify OTP');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter phone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                style={styles.input}
            />
            <Button title="Send OTP" onPress={sendOtp} color="#59ABC9"/>

            <TextInput
                placeholder="Enter OTP"
                value={otp}
                onChangeText={setOtp}
                keyboardType="number-pad"
                style={styles.input}
            />
            <Button title="Verify OTP" onPress={verifyOtp} color="#59ABC9"/>

            {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    input: { borderBottomWidth: 1, marginBottom: 15 },
    message: { marginTop: 20, fontSize: 16 },
});

export default PhoneotpScreen;