import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Heading = ({desc,Textstyling}) => {
  
    return (
      <View style={styles.headerContainer}>
        <Text style={Textstyling} >
          {desc}
        </Text>
      </View>
    );
  };

  const styles=StyleSheet.create({
headerContainer:{
    width:"100%",
},

  })

export default Heading
