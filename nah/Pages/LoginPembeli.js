import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderBeforeLogin from '../components/HeaderBeforeLogin';
import BoxOpsi from '../components/BoxOpsi';
import TextLogRes from '../components/TextLogRes';
import BoxInput from '../components/BoxInput';
import Tombol from '../components/Tombol';
import { TextCoklat } from '../Utils/color';

const LoginPembeli = () => {
  const navigation = useNavigation();
  
  const handleBack = () => {
    navigation.navigate('Login');
  };
  const handleLogin = () => {
    navigation.navigate('HomePembeli');
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderBeforeLogin onPress={handleBack} />
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: TextCoklat,
            margin: 10,
          }}>
          Login Sebagai Pembeli
        </Text>
        <TextLogRes text="Silahkan Login Menggunakan Username dan Password" />
        <BoxInput placeholder="Username" />
        <BoxInput placeholder="Password" secureTextEntry="true" />
        <Tombol text="Log In" onPress={handleLogin} />
      </View>
    </ScrollView>
  );
};

export default LoginPembeli;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1CBA9',
  },
});
