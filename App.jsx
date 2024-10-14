// import { Button, Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// const App = () => {
//   return (
//     <View  style={styles.mainContainer}>
//     <Text style={{
//       fontSize:40,
//       fontWeight:'500',
//       color:'#e8f0ff',
//       top:60,
//       left:20,
//     }}>Welcome to Limat</Text>
//      <Image source={require('./src/constants/download(2).png')} style={{
//       width:50,
//       height:50,
//       top:150,
//       left:50,
//      }}/>
//   <Text style={{
//     fontWeight:'500',
//     color:'white',
//     top:120,
//     left:100
//   }}>Limat It Solutions</Text>

//       <View  >
//       <Text style={styles.F1style}> Let's  Get</Text>
//      <Text style={styles.F1style}>Started </Text>
//      </View>
//     <View>
//       <Button/>
//     </View>
//     </View>

//   )
// }

// export default App

// const styles = StyleSheet.create({
// mainContainer:{
//   flex:1,
//   backgroundColor:'#rgb(22,99,163)',
//   // position:'relative'
// },
// F1style:{
// fontSize:50,
// fontWeight:'700',
// color :'#fffaff',
// textAlign:'center',
// justifyContent:'center',
// alignItems:'center',
// top:'150%',
// right:'20%',
// },


// }
// )
import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screen/LoginScreen';
import WelcomeScreen from './src/screen/WelcomeScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen
      } />
      <Stack.Screen name="Login" component={LoginScreen}
       />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})