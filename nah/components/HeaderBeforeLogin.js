import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Logo1, Logo2, ArBack, SettingLogo } from '../assets/index';

const HeaderBeforeLogin = ({ type, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.img(type)}>
        <TouchableOpacity onPress={onPress}>
          <Image type="AR" style={styles.img3} source={ArBack} />
        </TouchableOpacity>
        <Image style={styles.img1} source={Logo1} />
        <Image style={styles.img2} source={Logo2} />
        <View>
          <TouchableOpacity >
            <Image style={styles.img4} source={SettingLogo} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderBeforeLogin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1CBA9',
  },
  img: (type) => ({
    flexDirection: 'row',
    alignItems: type === 'AR' ? 'center' : 'flex-start',
    paddingHorizontal: type === 'AR' ? 20 : 0,
    paddingVertical: type === 'AR' ? 0 : 8,
    justifyContent: 'space-bettween',
  }),
  img1: {
    width: 52,
    height: 53,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 100,
    boxShadow: '0px 0px 10px #503106',
  },
  img2: {
    width: 141,
    height: 29,
    alignSelf: 'center',
  },
  img3: {
    margin: 3,
  },
  img4: {
    marginLeft: 77,
  },
});
