import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Image source={require('../src/constants/Limat-Logo12121-p6pfs4n0x49ql0o2pnr6ojpqcfv4nqd2pvj6jpa5ok.png')} style={styles.headerStyle}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerStyle:{
width:'80%',
height:120,
resizeMode:'cover',
top:50
},
})