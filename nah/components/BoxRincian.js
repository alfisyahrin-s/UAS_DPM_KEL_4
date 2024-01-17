import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {BoxColor, TextCoklat, TextHitam} from '../Utils/color'

const BoxRincian = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BoxRincian;

const styles = StyleSheet.create({
  container: {
    width: 112,
    height: 32,
    backgroundColor: BoxColor,
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 80,
    margin: 20
    
  },
  text: {
    color: TextHitam,
    fontSize: 14,
    textAlign: 'center',
  },
});
