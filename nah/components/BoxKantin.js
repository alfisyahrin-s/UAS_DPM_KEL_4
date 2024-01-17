import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet,Text } from 'react-native';
import {BoxColor, TextCoklat, TextHitam} from '../Utils/color'
import { Logo1, Logo2, ArBack, SettingLogo, Tfc } from '../assets/index';

const BoxKantin = ({img, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>
        Canteen 1
      </Text>
      <View style={styles.container}>
        <Image style={{alignSelf: 'center'}} source={Tfc}/>
      </View>
    </TouchableOpacity>
  );
};

export default BoxKantin;

const styles = StyleSheet.create({
  container: {
    width: 311,
    height: 70,
    backgroundColor: BoxColor,
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: TextHitam,
    fontSize: 14,
    
  },
});
