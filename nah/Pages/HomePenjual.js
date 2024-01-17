import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import TextPillOpsi from '../components/TextPillOpsi';
import { Logo1, Logo2 } from '../assets/index';
import { useNavigation } from '@react-navigation/native';
import BottomTab from '../components/BottomTab';
import { auth, db } from '../firebase';

const HomePenjual = ({navigation}) => {
  const [userData, setUserData] = useState('');

  async function getData() {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      const response = await axios.post('http://localhost:5001/userdata-penjual', {
        token: token,
      });
      console.log(response.data);
      setUserData(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.img}>
          <Image style={styles.img1} source={Logo1} />
          <Image style={styles.img2} source={Logo2} />
          <TextPillOpsi text="Anda Log in Sebagai Penjual " />
          <TextPillOpsi text={userData.nama} />
        </View>
      </TouchableOpacity>
      <View style={{ alignItems: 'end' }}>
        <BottomTab />
      </View>
    </View>
  );
};

export default HomePenjual;

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
