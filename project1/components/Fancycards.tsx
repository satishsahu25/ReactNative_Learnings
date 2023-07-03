import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Fancycards = () => {
  return (
    <View>
      <Text style={styles.heading}>Fancycards</Text>
      <View style={[styles.card,styles.elevated]}>
        <Image
            source={{uri:"https://cdn.pixabay.com/photo/2023/06/15/19/31/beach-house-8066388_1280.jpg"}}
        
        style={styles.cardimage}
        />
        <View style={styles.cardbody}>
            <Text style={styles.cardtitle}>
                Hey welcome to my city
            </Text>
            <Text style={styles.cardlabel}>
                Pink City
            </Text>
            <Text style={styles.descrip}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, reprehenderit.
            </Text>
            <Text style={styles.cardfooter}>Footer</Text>
        </View>
      </View>
    </View>
  )
}

export default Fancycards

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        fontWeight:"bold",
        paddingHorizontal:8,
        paddingVertical:2
    },
    card:{
        height:360,
        width:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16

    },
   
    cardfooter:{
    },
    elevated:{
        backgroundColor:"#FFFFFF",
        elevation:3,
        shadowOffset:{
            height:1,
            width:1
        }
    },
    cardimage:{
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginBottom:8
    },cardbody:{
        color:"#000000",
        flexGrow:1,
        paddingHorizontal:12,
    },cardtitle:{
        color:"#000000",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:6
    },cardlabel:{
        color:"#000000",
        fontSize:12,
        marginBottom:6
    },
    descrip:{
        color:"#000000",
        fontSize:12,
        marginBottom:6
    }
})