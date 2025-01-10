import React, { useEffect } from 'react';
import { StyleSheet,Alert,TouchableOpacity,Text} from 'react-native';
import { GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons


const GoogleScreen = () => {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId:'120132720175-7rd254cem457cjen8f95jl6o0hn1s6u4.apps.googleusercontent.com', // From Google Cloud Console
            scopes: ['email', 'profile'], // Add necessary scopes

        });
    }, []);

      const signInWithGoogle = async () => {
        try {
          await GoogleSignin.hasPlayServices(); // Ensure Google Play Services are available
          const userInfo = await GoogleSignin.signIn();
          const userName = userInfo.data?.user?.name;
          if (userName) {
            console.log('User Info:', userInfo);
            Alert.alert('Success', `Welcome ${userName}`);
          } else {
            throw new Error("User name is undefined in the response.");
          }
          
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            Alert.alert('Cancelled', 'Sign-in was cancelled.');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            Alert.alert('In Progress', 'Sign-in is in progress.');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            Alert.alert('Error', 'Google Play Services not available.');
          } else {
            console.error(error);
            Alert.alert('Error', error.message);
          }
        }
      };
    

  // return <Button title="Sign In with Google" onPress={signInWithGoogle} />;
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
    justifyContent: 'center', // Center the text and icon
    // backgroundColor: '#4285F4', // Google blue color
    backgroundColor:'#59ABC9',
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 20,
    position: 'relative', 
    width:'80%'
    // Required for absolute positioning
  },
  icon: {
    position: 'absolute', // Place the icon at a fixed position
    left: 20, // Adjust the icon's horizontal position
  },
  googleButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text within the button
  },
});


export default GoogleScreen;

