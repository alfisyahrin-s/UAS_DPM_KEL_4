import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TextPillOpsi = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TextPillOpsi;

const styles = StyleSheet.create({
  container: {
    width: 296,
    height: 22,
    marginTop: 21,
  },
  text: {
    color: '#160E01',
    fontSize: 14,
    textAlign: 'center',
  },
});
