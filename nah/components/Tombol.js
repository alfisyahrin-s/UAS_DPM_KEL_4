import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {BoxColor, TextCoklat, TextHitam} from '../Utils/color'

const Tombol = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tombol;

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 38,
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
