import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  console.log(score);

  return (
    <View style={styles.container}>
      {/* <View>
        <Text>kk</Text>
      </View> */}
      <Title titleText="Result" />
      <Text style={styles.score}> {score}</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/Exams-rafiki.png')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.text}> Go Home </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#e9c46a',
    height: '100%',
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
  },
  button: {
    width: '100%',
    backgroundColor: '#264653',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  score: {
    fontSize: 24,
    fontWeight: 800,
    alignSelf: 'center',
  },
});
