import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Logo1, Logo2, ArBack, SettingLogo } from '../assets/index';
import { Ionicons } from '@expo/vector-icons';
import { auth, db } from '../firebase';

const HeaderAfterLogin = ({ type, onPress, navigation }) => {
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

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.img(type)}>
          <TouchableOpacity onPress={onPress}>
            <Image type="AR" style={styles.img3} source={ArBack} />
          </TouchableOpacity>
          <Image
            style={styles.img1}
            source={{ uri: `https://i.pravatar.cc/300/` }}
          />
          <View style={{ paddingHorizontal: 8 }}>
            <Text style={styles.text}>{user.displayName}</Text>
            <Text style={styles.text}>Canteen Fakultas Teknik</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 8,
            paddingVertical: 8,
          }}>
          <TouchableOpacity style={{ marginRight: 8 }}>
            <Ionicons name="notifications-outline" size={24} color="#503106" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 2, marginLeft: 2 }}>
            <Ionicons name="md-settings-outline" size={24} color="#503106" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderAfterLogin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1CBA9',
    height: 80,
  },
  img: (type) => ({
    flexDirection: type === 'UR' ? 'column' : 'row',
    alignItems: type === 'AR' ? 'center' : 'flex-start',
    paddingHorizontal: type === 'AR' ? 20 : 0,
    paddingVertical: type === 'AR' ? 0 : 8,
    justifyContent: 'space-bettween',
  }),
  img1: {
    width: 52,
    height: 53,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
    boxShadow: '0px 0px 10px #503106',
  },

  img3: {
    margin: 3,
  },
  text: {
    fontFamily: 'Imprint MT Shadow',
    fontSize: 13,
  },
});
