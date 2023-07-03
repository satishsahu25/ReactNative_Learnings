import { Image, Linking, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Actioncards = () => {


    //opening the website on click
    function openwebsite( websiteLink:string){
        Linking.openURL(websiteLink);

    }


  return (
    <View>
      <Text style={styles.heading}>Blog Cards</Text>
      <View style={[styles.card,styles.elevatedcard]}>
        <View style={styles.container}>
            <Text style={styles.headertest}>
                Whats happening guys
            </Text>
            <View>
                <Image
                source={{uri:"https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg"}}
                style={styles.cardimage}
                />
                <View style={styles.bodycontainer}>
                    <Text numberOfLines={3}>dsfdsfds</Text>
                </View>
                <View style={styles.footercontainer}>
                    <TouchableOpacity
                    onPress={()=>openwebsite("https://pixabay.com/photos/polynesia-french-polynesia-tahiti-3021072/")}
                    >
                        <Text>Read more</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Actioncards

const styles = StyleSheet.create({
    container:{

    },
    footercontainer:{

    },
    cardimage:{
            height:200,
            width:300
    },
    bodycontainer:{

    },
    heading:{
        fontSize:20,
        fontWeight:"bold",
        paddingHorizontal:8,
        paddingVertical:2
    },
    headertest:{

    },
    card:{

    },
    elevatedcard:{

    }
})