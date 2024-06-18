import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';


export default function ButtonCustom({title ,tap, styling, vectorIcon}) {
  return (
    <TouchableOpacity style={styling} onPress={tap}>
    <Text>
    {vectorIcon && vectorIcon}
    </Text>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
 
  text:{
    fontFamily: 'Nunito-VariableFont_wght',
   fontWeight:'bold',
    color:"#75b800",
    fontSize:19
  }

})