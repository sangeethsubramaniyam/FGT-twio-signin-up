

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../Header';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.welcomeText}>
        Welcome to HomeScreen
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')} // Navigate to Login Screen
      >
        <Text style={styles.buttonText}>Login into Another Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
    color: '#000',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#59ABC9',
    padding: 10,
    marginTop: 20,
    marginHorizontal: 40,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;





