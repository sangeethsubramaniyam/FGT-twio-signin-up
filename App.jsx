
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


