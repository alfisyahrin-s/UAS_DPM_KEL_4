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
import HeaderAfterLoginPembeli from '../components/HeaderAfterLoginPembeli';
import { InputLogo, InputMakanan, InputMinuman, Tfc } from '../assets/index';
import { BoxLogo, BoxColor } from '../Utils/color';
import BottomTab from '../components/BottomTab';
import BoxKantin from '../components/BoxKantin';
import { auth, db } from '../firebase';

const HomePembeli = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        // navigate to login page if user is not logged in
        navigation.navigate('Login');
      }
    });

    return () => unsubscribe();
  }, [navigation]);

  if (!user) {
    return null;
  }

  const handleToMenu = () => {
     navigation.navigate('HomeMenu');
  }

  return (
    <View style={styles.container}>
      <HeaderAfterLoginPembeli onPress={null} />
      <View style={{ alignItems: 'center' }}>
        <BoxKantin onPress={handleToMenu} img={Tfc}/>
      </View>
    </View>
  );
};

export default HomePembeli;

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
    fontSize: 13,
    margin: 1.5,
  },
});
