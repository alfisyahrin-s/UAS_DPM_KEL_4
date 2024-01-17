import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Pages/Splash';
import HomePenjual from './Pages/HomePenjual';
import Login from './Pages/Login';
import LoginPembeli from './Pages/LoginPembeli';
import LoginPenjual from './Pages/LoginPenjual';
import RegisterPenjual from './Pages/RegisterPenjual';
import RegisterPembeli from './Pages/RegisterPembeli';
import InputMenu from './Pages/InputMenu';
import PensananMasuk from './Pages/PesananMasuk';
import PesananSelesai from './Pages/PesananSelesai';
import ModalForm from './Pages/InputMenu';
import HomePembeli from './Pages/HomePembeli';
import HomeMenu from './Pages/HomeMenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PensananMasuk"
          component={PensananMasuk}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InputMenu"
          component={InputMenu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ModalInput"
          component={ModalForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPembeli"
          component={LoginPembeli}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPenjual"
          component={LoginPenjual}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPenjual"
          component={RegisterPenjual}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPembeli"
          component={RegisterPembeli}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePenjual"
          component={HomePenjual}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePembeli"
          component={HomePembeli}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeMenu"
          component={HomeMenu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PesananSelesai"
          component={PesananSelesai}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
