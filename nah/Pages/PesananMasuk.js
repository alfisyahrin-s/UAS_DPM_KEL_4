import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import HeaderAfterLogin from '../components/HeaderAfterLogin';
import { PesananMasukLogo, InputMakanan, InputMinuman } from '../assets/index';
import { BoxLogo, BoxColor } from '../Utils/color';
import BottomTab from '../components/BottomTab';
import BoxRincian from '../components/BoxRincian';
import { Ionicons } from '@expo/vector-icons';
import { auth, db } from '../firebase';

const PesananMasuk = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderAfterLogin onPress={null} />
      <TouchableOpacity style={{padding: 8 ,alignItems: 'end'}}>
        <Ionicons name="reload-sharp" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.line} />
      <Image
        style={{
          alignSelf: 'center',
          height: 20,
          width: 232,
          marginVertical: 20,
        }}
        source={PesananMasukLogo}
      />
      <View style={styles.line} />
      <View style={{ height: 120, flexDirection: 'row' }}>
        <Text style={styles.fieldText}>1. poi</Text>
        <BoxRincian text="Rincian" />
      </View>
      <View style={styles.line} />
      <View style={{ height: 120, flexDirection: 'row' }}>
        <Text style={styles.fieldText}>2. Atas Nama</Text>
        <BoxRincian text="Rincian" />
      </View>
      <View style={styles.line} />
      <View style={{ height: 120, flexDirection: 'row' }}>
        <Text style={styles.fieldText}>3. Atas Nama</Text>
        <BoxRincian text="Rincian" />
      </View>
      <View style={styles.line} />
      
      <View style={styles.line} />
      <View style={{ marginTop: 20 }}>
        <BottomTab />
      </View>
    </View>
  );
};

export default PesananMasuk;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1CBA9',
  },
  line: {
    height: 1,
    backgroundColor: '#1A374D',
  },
  boxLogo: {
    width: 63,
    height: 64,
    backgroundColor: BoxLogo,
    borderRadius: 10,
    boxShadow: '0px 0px 10px rgba(80, 49, 6, 0.25)',
    alignItems: 'center',
    marginTop: 5,
  },
  fieldText: {
    fontFamily: 'Imprint MT Shadow',
    fontSize: 18,
    margin: 5,
  },
});
