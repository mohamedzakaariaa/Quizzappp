import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/home'
import Quiz from './src/screens/quiz'
import Result from './src/screens/result'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './src/navigations/Stack'

const App = () => {
  return (
    
 <NavigationContainer>
  <MyStack/>
  </NavigationContainer>
  
  )
}

export default App

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        paddingTop:40,
    },
})