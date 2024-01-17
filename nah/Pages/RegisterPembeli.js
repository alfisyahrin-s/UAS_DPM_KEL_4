import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import HeaderBeforeLogin from '../components/HeaderBeforeLogin';
import TextLogRes from '../components/TextLogRes';
import BoxInput from '../components/BoxInput';
import Tombol from '../components/Tombol';
import { TextCoklat } from '../Utils/color';
import axios from 'axios';

const RegisterPembeli = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [npm, setNPM] = useState('');
  const [error, setError] = useState(null);

  const handleBack = () => {
    navigation.navigate('Login');
  };

  // const handleRegister = () => {
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((userCredentials) => {
  //       const user = userCredentials.user;
  //       db.collection('penjual')
  //         .doc(user.uid)
  //         .set({
  //           nama: nama,
  //           email: email,
  //           NPM: NPM
  //         })
  //         .then(() => {
  //           setNama('');
  //           setEmail('');
  //           setNPM('');
  //           setPassword('');
  //         });
  //       user
  //         .updateProfile({
  //           displayName: nama,
  //         })
  //         .then(() => {
  //           console.log('sukses register', user);
  //         })
  //         .catch((error) => {
  //           setError(error);
  //         });
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });

  //   if (handleRegister) {
  //     return navigation.navigate('Login');
  //   }
  // };

  const handleRegister = () => {
    console.log(nama);
    if (!nama || !email || !npm || !password) {
      Alert.alert('Error', 'Mohon isi semua data terlebih dahulu !!');
      console.log('Mohon isi semua data terlebih dahulu !!');
      return;
    }
    const userData = {
      nama: nama,
      email: email,
      npm: npm,
      password: password,
    };
    axios
      .post('http://localhost:5001/register-pembeli', userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 'ok') {
          Alert.alert('Registrasi Berhasil', res.data.data);
          console.log('Registrasi Berhasil !!');
          navigation.navigate('Login');
        } else {
          Alert.alert('Registrasi Gagal', res.data.data);
          console.log('Registrasi Gagal !!');
        }
      })
      .catch((e) => console.log(e));
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
          Register Sebagai Pembeli
        </Text>
        <TextLogRes text="Silahkan Isi Data Diri Anda Dengan Benar!" />
        <BoxInput
          type="register"
          placeholder="e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <BoxInput placeholder="Nama" value={nama} onChangeText={setNama} />
        <BoxInput
          placeholder="Password"
          secureTextEntry="true"
          value={password}
          onChangeText={setPassword}
        />
        <BoxInput
          placeholder="NPM"
          value={npm}
          onChangeText={setNPM}
        />
        <Tombol text="Sign Up" onPress={handleRegister} />
      </View>
    </ScrollView>
  );
};

export default RegisterPembeli;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1CBA9',
  },
});
