import { StyleSheet, Image, View ,Text} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{flexDirection:'row'}}>
      <Image source={require('../src/constants/download(2).png')} style={styles.headerStyle}/>
<Text style={{fontSize:20,fontWeight:700,top:45,left:20,color:'#fff',textShadowColor:'black'}}>LIMAT TECHNOLOGY SOLUTIONS</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerStyle:{
width:50,
height:70,
resizeMode:'cover',
top:30,
left:15
},
})