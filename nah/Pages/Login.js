import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderBeforeLogin from '../components/HeaderBeforeLogin';
import BoxOpsi from '../components/BoxOpsi';
import TextPillOpsi from '../components/TextPillOpsi';

const LoginPage = () => {
  const navigation = useNavigation();
  const handleNavigateToSplash = () => {
    navigation.navigate('Splash');
  };
  const handleNavigateToLoginPenjual = () => {
    navigation.navigate('LoginPenjual');
  };
  const handleNavigateToLoginPembeli = () => {
    navigation.navigate('LoginPembeli');
  };
  const handleNavigateToRegisterPenjual = () => {
    navigation.navigate('RegisterPenjual');
  };

    const handleNavigateToRegisterPembeli = () => {
    navigation.navigate('RegisterPembeli');
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderBeforeLogin onPress={handleNavigateToSplash} />
      <View style={{ alignItems: 'center' }}>
        <BoxOpsi
          onPress={handleNavigateToLoginPembeli}
          text="Log in Sebagai Pembeli"
        />
        <BoxOpsi
          onPress={handleNavigateToLoginPenjual}
          text="Log in Sebagai Penjual"
        />
        
        <TextPillOpsi
          onPress={handleNavigateToRegisterPenjual}
          text="Sign up Sebagai Penjual "
        />
        <TextPillOpsi
          onPress={handleNavigateToRegisterPembeli}
          text="Sign up Sebagai Pembeli "
        />
      </View>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1CBA9',
  },
});
