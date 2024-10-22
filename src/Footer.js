import { StyleSheet, TouchableOpacity, View,Linking,Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Footer = () => {
  return (
    <View >
    <View style={{flexDirection:'row',top:400,justifyContent:'space-around',flext:2}}>
      <TouchableOpacity 
        onPress={()=>Linking.openURL('https://limat-tech.com/')} >
        <Icon name="web" size={30} color='#fff'/>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=>Linking.openURL('https://www.facebook.com/limattechnologysolutions')} >
        <Icon name="facebook" size={30} color='#fff'/>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=>Linking.openURL('https://www.linkedin.com/company/limat-technology-solution')} >
        <Icon name="linkedin" size={30} color='#fff'/>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=>Linking.openURL('https://x.com/i/flow/login?redirect_after_login=%2FLimatSolutions')} >
        <Icon name="twitter" size={30} color='#fff'/>
      </TouchableOpacity>


<Text style={{color:'#fff',fontSize:18}}>Contact Us</Text>
    </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({})