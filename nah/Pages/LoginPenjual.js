import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import HeaderBeforeLogin from '../components/HeaderBeforeLogin';
import BoxOpsi from '../components/BoxOpsi';
import TextLogRes from '../components/TextLogRes';
import BoxInput from '../components/BoxInput';
import Tombol from '../components/Tombol';
import { TextCoklat } from '../Utils/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

const LoginPenjual = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleBack = () => {
    navigation.navigate('Login');
  };


    const handleLogin = async () => {
    try {
      if ( !email || !npm ) {
      Alert.alert('Error', 'Mohon isi semua data terlebih dahulu !!');
      console.log('Mohon isi semua data terlebih dahulu !!');
      return;
    }
      const userData = {
        email: email,
        password: password,
      };
      const response = await axios.post('http://localhost:5001/login-penjual', userData);

      if (response.data.status === 'ok') {
        Alert.alert('Login Berhasil');
        AsyncStorage.setItem('token', response.data.data);
        navigation.navigate('HomePenjual'); 
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
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
          Login Sebagai Penjual
        </Text>
        <TextLogRes text="Inputkan Email dan Password Anda!" />
        <BoxInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <BoxInput
          placeholder="Password"
          secureTextEntry="true"
          alue={password}
          onChangeText={setPassword}
        />
        <Tombol text="Log In" onPress={handleLogin} />
      </View>
    </ScrollView>
  );
};

export default LoginPenjual;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1CBA9',
  },
});
