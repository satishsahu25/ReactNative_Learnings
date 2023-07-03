import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Elevatedcards = () => {
  return (
    <View>
      <Text>Elevatedcards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardelevated]}>
          <Text>aaa</Text>
        </View> 
        <View style={[styles.card, styles.cardelevated]}>
          <Text>ccc</Text>
        </View> 
        <View style={[styles.card, styles.cardelevated]}>
          <Text>ddfdfdd</Text>
        </View><View style={[styles.card, styles.cardelevated]}>
          <Text>ddd</Text>
        </View><View style={[styles.card, styles.cardelevated]}>
          <Text>ddd</Text>
        </View><View style={[styles.card, styles.cardelevated]}>
          <Text>ddd</Text>
        </View><View style={[styles.card, styles.cardelevated]}>
          <Text>dddee</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Elevatedcards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    width:100,
    height:100,
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "center",
    margin:2,
    borderRadius:4,
    color:"red"
  },
  cardelevated: {
    backgroundColor:"#CAD538",
    elevation:4,
    shadowOffset:{
        width:1,
        height:1
    }
  },
});
