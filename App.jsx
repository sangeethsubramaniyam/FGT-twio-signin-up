
import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screen/LoginScreen';
import WelcomeScreen from './src/screen/WelcomeScreen';
import Signupscreen from './src/screen/Signupscreen';
import GuestMode from './src/screen/GuestMode';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen
      } />
      <Stack.Screen name="Login" component={LoginScreen}
       />
       <Stack.Screen name="Signup" component={Signupscreen}
       />
        <Stack.Screen name="GuestMode" component={GuestMode}
       />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})