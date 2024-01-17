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
import {
  PesananSelesaiLogo,
  InputMakanan,
  InputMinuman,
} from '../assets/index';
import { BoxLogo, BoxColor } from '../Utils/color';
import BottomTab from '../components/BottomTab';
import BoxRincian from '../components/BoxRincian';
import { auth, db } from '../firebase';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const PesananSelesai = ({ navigation }) => {
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
        source={PesananSelesaiLogo}
      />
      <View style={styles.line} />
      <View style={{ height: 120 }}>
        <Text style={styles.fieldText}>1. Syafirawati</Text>
        <Text style={styles.fieldText1}>Kode transaksi : C2A0405</Text>
        <View style={{ flexDirection: 'row' }}>
          <BoxRincian text="Rincian" />
          <View style={{ marginLeft: 85 }}>
            <MaterialIcons name="check-box" size={24} color={BoxColor} />
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View style={{ height: 120 }}>
        <Text style={styles.fieldText}>2. Atas Nama</Text>
        <Text style={styles.fieldText1}>Kode transaksi : C2A0505</Text>
        <View style={{ flexDirection: 'row' }}>
          <BoxRincian text="Rincian" />
          <View style={{ marginLeft: 85 }}>
            <MaterialIcons
              name="check-box-outline-blank"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View style={{ height: 120 }}>
        <Text style={styles.fieldText}>3. Atas Nama</Text>
        <Text style={styles.fieldText1}>Kode transaksi : C2A0605</Text>
        <View style={{ flexDirection: 'row' }}>
          <BoxRincian text="Rincian" />
          <View style={{ marginLeft: 85 }}>
            <MaterialIcons
              name="check-box-outline-blank"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>
      <View style={styles.line} />

      <View style={styles.line} />
      <View style={{ marginTop: 20 }}>
        <BottomTab />
      </View>
    </View>
  );
};

export default PesananSelesai;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1CBA9',
  },
  line: {
    height: 1,
    backgroundColor: '#1A374D',
  },
  fieldText1: {
    fontFamily: 'Imprint MT Shadow',
    fontSize: 13,
    margin: 5,
  },
  fieldText: {
    fontFamily: 'Imprint MT Shadow',
    fontSize: 18,
    margin: 5,
  },
});
