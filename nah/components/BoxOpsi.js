import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {BoxColor, TextCoklat, TextHitam} from '../Utils/color'

const BoxOpsi = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BoxOpsi;

const styles = StyleSheet.create({
  container: {
    width: 271,
    height: 58,
    backgroundColor: BoxColor,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop : 40
  },
  text: {
    color: TextHitam,
    fontSize: 14,
    textAlign: 'center',
  },
});
