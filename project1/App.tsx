import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import Elevatedcards from './components/Elevatedcards'
import Fancycards from './components/Fancycards'
import Actioncards from './components/Actioncards'
import ContactList from './components/ContactList'
import PaswordGen from './components/PaswordGen'

const App = () => {
  return (
   <SafeAreaView>
    <ScrollView>
      <Text>app</Text>
      <PaswordGen/>
      {/* <Flatcards/>
      <Elevatedcards/>
      <Fancycards/>
      <Fancycards/>
      <Fancycards/>
      <Actioncards/>
      <ContactList/> */}

    </ScrollView>
   </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})