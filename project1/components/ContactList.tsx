import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ContactList = () => {

    const [users,setusers]=useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/users").then((resp)=>{
            return resp.json();
        }).then((data)=>{
            setusers(data);
        });
    },[]);


  return (
    <View>
      <Text>ContactList</Text>
      <ScrollView>
        {users.map(({id,name,email})=>{
            return (
                <View key={id}>
                    <Image
                    source={{uri:"https://cdn.pixabay.com/photo/2023/06/15/19/31/beach-house-8066388_1280.jpg"}}
                    style={styles.listimg}
                    />
                    <Text>{name}</Text>
                    <Text>{email}</Text>

                </View>
            )
        })}
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    listimg:{
        height:50,
        width:50,
        borderRadius:60/2,
        marginRight:10
    }
})