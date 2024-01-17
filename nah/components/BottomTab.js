import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BoxColor, TextCoklat, TextHitam } from '../Utils/color';
import { EditLogo, SendLogo, DocumentLogo } from '../assets/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = () => {
  const navigation = useNavigation();

  const handleInputMenu = () => {
    navigation.navigate('InputMenu');
  };
  const handlePesananMasuk = () => {
    navigation.navigate('PensananMasuk');
  };
  const handlePesananSelesai = () => {
    navigation.navigate('PesananSelesai');
  };
  // return (
  //   <View style={styles.container}>
  //     <View style={styles.boxlogo}>
  //       <TouchableOpacity onPress={handleInputMenu}>
  //         <Image source={EditLogo} />
  //       </TouchableOpacity>
  //     </View>
  //     <View style={styles.boxlogo} onPress={handlePesananMasuk}>
  //       <TouchableOpacity>
  //         <Image source={DocumentLogo} />
  //       </TouchableOpacity>
  //     </View>
  //     <View style={styles.boxlogo}>
  //       <TouchableOpacity onPress={handlePesananSelesai}>
  //         <Image source={SendLogo} />
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <View style={styles.boxlogo}>
        <TouchableOpacity onPress={handleInputMenu}>
          <Image source={EditLogo} />
        </TouchableOpacity>
      </View>
      <View style={styles.boxlogo} >
        <TouchableOpacity onPress={handlePesananMasuk}>
          <Image source={DocumentLogo} />
        </TouchableOpacity>
      </View>
      <View style={styles.boxlogo}>
        <TouchableOpacity onPress={handlePesananSelesai}>
          <Image source={SendLogo} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default BottomTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 310,
    height: 35,
    borderRadius: 20,
    backgroundColor: BoxColor,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 25,
    marginHorizontal: 12,
  },
  boxlogo: {
    marginTop: 7,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
