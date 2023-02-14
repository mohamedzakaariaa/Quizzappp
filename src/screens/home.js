import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = ( {navigation}) => {
  return (
    <View style={styles.container}>
      <Title/>
      <View  
      style = {styles.bannerContainer}>
      <Image 
          source={require('../assets/Exams-rafiki.png')}
          style={styles.banner}
          resizeMode='contain'
        />
      </View>
      
      <TouchableOpacity onPress={()=> navigation.navigate("Quiz")} 
      style={styles.button}
      ><Text style={styles.text}> start </Text></TouchableOpacity>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    paddingHorizontal:20,  
    backgroundColor:'#e9c46a',
    height:'100%',
 
  },
  banner: {
    height:300,
    width:300,
  
  
  },
  bannerContainer:{
justifyContent:'center',
alignItems:'center',
flex:1,
  },
  text:{
    color:'#ffffff',
    fontSize:24,
    fontWeight:'600',
  

  },
  button:{
    width:'100%',
    backgroundColor:'#264653',
    padding:16,
    borderRadius:16,
    alignItems:'center',
    marginBottom:20

  },
});
