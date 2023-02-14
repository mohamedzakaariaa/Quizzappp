import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Result = ({navigation}) => {
  return (
    <View style ={styles.container}>
      <View>
        <Text>R</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/Exams-rafiki.png')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity onPress={()=> navigation.navigate("Home")}> 
          <Text style={styles.text}> Home </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container:{

  },
  banner: {
    height:300,
    width:300,
  
  },
  bannerContainer:{
justifyContent:'center',
alignItems:'center',
  },
  text:{
    color:'#000000',
  }
});
