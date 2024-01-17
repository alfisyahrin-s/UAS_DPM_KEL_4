import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Logo1, Logo2 } from '../assets/index';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  const handleNavigateToSLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <TouchableOpacity onPress={handleNavigateToSLogin} style={styles.container}>
      <View style={styles.img}>
        <Image style={styles.img1} source={Logo1} />
        <Image style={styles.img2} source={Logo2} />
      </View>
    </TouchableOpacity>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1CBA9',
    justifyContent: 'center',
  },
  img: {
    alignItems: 'center',
  },
  img1: {
    width: 143,
    height: 139,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 100,
    boxShadow: '0px 0px 10px #503106',
  },
  img2: {
    width: 341,
    height: 110,
  },
});
