
import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screen/LoginScreen';
import WelcomeScreen from './src/screen/WelcomeScreen';
import Signupscreen from './src/screen/Signupscreen';
import GuestScreen from './src/screen/GuestScreen';
import HomeScreen from './src/screen/HomeScreen';
import PhoneotpScreen from './src/screen/phoneotpScreen';
import ForgotScreen from './src/screen/ForgotScreen';
import ResetScreen from './src/screen/ResetScreen';
import AdminPanelScreen from './src/screen/AdminPanelScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen}/>
       <Stack.Screen name="Signup" component={Signupscreen}/>
        <Stack.Screen name="Guestpage" component={GuestScreen}/> 
       <Stack.Screen name="Home" component={HomeScreen}/> 
       <Stack.Screen name="phonenumber" component={PhoneotpScreen}/> 
       <Stack.Screen name="Forgot" component={ForgotScreen}/> 
       <Stack.Screen name="Resetpassword" component={ResetScreen}/> 
       <Stack.Screen name="admin" component={AdminPanelScreen}/> 
      
        
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})


// import React, { Component } from 'react';
// import {GoogleSignin,GoogleSigninButton} from '@react-native-google-signin/google-signin'
// import { Image, Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// GoogleSignin.configure({
//   webClientId : '197029232976-0vvv95oustnj5b17oemj3e5fqe2m040k.apps.googleusercontent.com',
//   offlineAccess: true,
// })


// class App extends Component {
// constructor(props) {
// super(props);
// this.state = {
// userGoogleInfo: {},
// loaded: false
// };
// }

// signIn = async()=>{
//   try{
//     await GoogleSignin.hasPlayServices()
//   const userInfo = await GoogleSignin.signIn();
//   this.setState({
//   userGoogleInfo : userInfo,
//   loaded: true
//   })
//   }
// catch(error) {
// console.log(error.message);
// }
//   }
// render() {
// return (
// <SafeAreaView>

// <GoogleSigninButton
// onPress={this.signIn}
// size={GoogleSigninButton.Size.Wide}
// color={GoogleSigninButton.Color.Dark}
// style={{width: 200,height:50,marginTop:150,marginLeft:75}}
// />
// {this.state.loaded ?

// <View>

// <Text>{this.state.userGoogleInfo.user.name}</Text>
// <Text>{this.state.userGoogleInfo.user.email}</Text>
// <Image
// style={{width: '100', height: '100'}}
// source={{uri:this.state.userGoogleInfo.user.photo}}
// />
// </View> :
// <Text> Not signed-In</Text>
// }
// </SafeAreaView>
// );
//  }
// }
// export default App;
//
// import React, { Component } from 'react';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import { View, Text, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import axios from 'axios';

// GoogleSignin.configure({
//   webClientId: '197029232976-0vvv95oustnj5b17oemj3e5fqe2m040k.apps.googleusercontent.com', // Replace with your actual Web Client ID
//   offlineAccess: true,
// });

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userGoogleInfo: {},
//       loaded: false,
//     };
//   }

//   signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       const idToken = userInfo.idToken; // Google ID Token
      
//       // Send the token to the backend for verification
//       await axios.post('http://10.0.2.2:3000/api/auth/google', { idToken });

//       this.setState({
//         userGoogleInfo: userInfo,
//         loaded: true,
//       });
//     } catch (error) {
//       console.log('Error during sign-in:', error.message);
//     }
//   };

//   render() {
//     return (
//       <SafeAreaView>
//         <GoogleSigninButton
//           onPress={this.signIn}
//           size={GoogleSigninButton.Size.Wide}
//           color={GoogleSigninButton.Color.Dark}
//           style={{ width: 200, height: 50, marginTop: 150, marginLeft: 75 }}
//         />
//         {this.state.loaded ? (
//           <View>
//             <Text>{this.state.userGoogleInfo.user.name}</Text>
//             <Text>{this.state.userGoogleInfo.user.email}</Text>
//             <Image
//               style={{ width: 100, height: 100 }}
//               source={{ uri: this.state.userGoogleInfo.user.photo }}
//             />
//           </View>
//         ) : (
//           <Text>Not signed-In</Text>
//         )}
//       </SafeAreaView>
//     );
//   }
// }

// export default App;
