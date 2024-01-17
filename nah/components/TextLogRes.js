import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextLogRes = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default TextLogRes;

const styles = StyleSheet.create({
  container: {
    width: 341,
    height: 48,
    paddingHorizontal: 17,
    paddingVertical : 14,
    marginBottom: 28
  },
  text: {
    color: '#503106',
    fontSize: 14,
    textAlign: 'center',
  },
});
