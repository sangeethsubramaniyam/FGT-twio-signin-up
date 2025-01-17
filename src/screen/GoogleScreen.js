
import React, { useEffect } from 'react'; 
import { StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import axios from 'axios'; // For making HTTP requests
import { useNavigation } from '@react-navigation/native';

const GoogleScreen = () => {
  const navigation = useNavigation(); // Initialize the navigation hook

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '120132720175-7rd254cem457cjen8f95jl6o0hn1s6u4.apps.googleusercontent.com', // From Google Cloud Console
            scopes: ['openid','email', 'profile'], // Add necessary scopes
        });
    }, []);

    const signInWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true }); // Ensure Google Play Services are available
            const userInfo = await GoogleSignin.signIn();
            const idToken = userInfo.data.idToken; // Get the Google ID token
            console.log('User Info:', userInfo); // Log the user info to inspect the structure

            if (!idToken) {
              console.error('No ID token retrieved:', userInfo);

              Alert.alert('Error', 'No ID token retrieved. Please try again.');
              return;
            }
           // Send the idToken to your backend
    const response = await axios.post('http://10.0.2.2:3000/google-login', { idToken });

    if (response.status === 200) {
      Alert.alert('Login Successful', `Welcome, ${response.data.username}!`);
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', response.data.message);
    }
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      Alert.alert('Login Cancelled', 'User cancelled the login process.');
    } else {
      Alert.alert('Error', error.message);
    }
  }
};

    return (
        <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
            <Icon name="google" size={20} color="#FFFFFF" style={styles.icon} />
            <Text style={styles.googleButtonText}>Sign In with Google</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#59ABC9',
        paddingVertical: 9,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginTop: 20,
        position: 'relative',
        width: '80%',
    },
    icon: {
        position: 'absolute',
        left: 20,
    },
    googleButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default GoogleScreen;
