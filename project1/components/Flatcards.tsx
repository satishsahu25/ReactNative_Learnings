import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatcards = () => {
  return (
    <View>
      <Text>Flatcards</Text>
      <View style={styles.cardconatiner}>
        <View style={[styles.carditem ,styles.carditem1]}>
            <Text>Red</Text>
        </View> 
        <View style={[styles.carditem ,styles.carditem2]}>
            <Text>Green</Text>
        </View> 
        <View style={[styles.carditem ,styles.carditem3]}>
            <Text>Blue</Text>
        </View> 
        <View style={[styles.carditem ,styles.carditem3]}>
            <Text>Blue Eyes</Text>
        </View>
      </View>
    </View>
  )
}

export default Flatcards

const styles = StyleSheet.create({
    cardconatiner:{
           flex:1,
           flexDirection:'row',
           padding:5
    },
    carditem:{
        backgroundColor:'red',
        height:100,
        width:100,
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        margin:10,
        borderColor:'black',
    },
    carditem2:{
        backgroundColor:'green'
    },
    carditem1:{
        backgroundColor:'red'
    },
    carditem3:{
        backgroundColor:'blue'
    }

})