import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({titleText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{titleText}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  text: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: '600',
  },
});
