import { View, Text, SafeAreaView, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'

function Basic1():JSX.Element {

  //react hook it returns the current preferred mode of the user 
  //from apperance API
  const colorScheme = useColorScheme();
// Kya user ne dark select kiya hai 
  const isDarkMode = colorScheme === "dark"


  return (
      <View style={styles.container}>
      <Text style={isDarkMode?styles.whitetext:styles.darktest}>Dark light</Text>
    
    </View>
 
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  },whitetext:{
    color:"#fff"
  },
  darktest:{
    color:"#000000"
  }
})



export default Basic1 