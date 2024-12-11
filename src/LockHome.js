import { StyleSheet, Image, View ,Text} from 'react-native'
import React from 'react'

const LockHome = () => {
  return (
    <View style={{flexDirection:'row',left:20}}>
      <Image source={require('../src/constants/download(2).png')} style={styles.headerStyle}/>
<Text style={{fontSize:20,fontWeight:700,top:37,left:20,color:'#fff',textShadowColor:'black'}}>LIMAT TECHNOLOGY SOLUTIONS</Text>
    </View>
  )
}

export default LockHome

const styles = StyleSheet.create({
    headerStyle:{
width:25,
height:40,
resizeMode:'cover',
top:30,
left:15
},
})