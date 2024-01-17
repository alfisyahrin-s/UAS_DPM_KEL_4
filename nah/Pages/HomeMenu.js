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
  MenuLogo,
  InputMakanan,
  InputMinuman,
  Mie,
  Kopi,
} from '../assets/index';
import { BoxLogo, BoxColor } from '../Utils/color';
import BottomTab from '../components/BottomTab';
import { auth, db } from '../firebase';

const ItemMakanan = ({
  navigation,
  source,
  nama,
  harga,
  jumlah,
  tambah,
  kurang,
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View
        style={{
          width: 70,
          height: 69,
          backgroundColor: BoxLogo,
          alignItems: 'center',
          margin: 4,
        }}>
        <Image
          source={source}
          style={{
            width: 55,
            height: 51,
            marginTop: 8,
            borderRadius: 100,
            justifyContent: 'center',
          }}
        />
      </View>

      <View
        style={{
          margin: 5.5,
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 10, marginBottom: 5 }}>{nama}</Text>
          <TouchableOpacity
            style={{
              marginHorizontal: 6,
              backgroundColor: BoxColor,
            }}>
            <Text style={{ fontSize: 10, marginBottom: 5 }}>[+]</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 10, marginBottom: 5 }}>{harga}</Text>
        <Text style={{ fontSize: 10, marginBottom: 5 }}>jumlah</Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={kurang}
            style={{
              marginHorizontal: 6,
              backgroundColor: BoxColor,
            }}>
            <Text style={{ fontSize: 10, marginBottom: 5 }}>[-]</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 10, marginBottom: 5 }}>.{jumlah}.</Text>
          <TouchableOpacity
            onPress={tambah}
            style={{
              marginHorizontal: 6,
              backgroundColor: BoxColor,
            }}>
            <Text style={{ fontSize: 10, marginBottom: 5 }}>[+]</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ItemMNn = ({
  navigation,
  source,
  nama,
  harga,
  jumlahnm,
  kurangmn,
  tambahmn,
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View
        style={{
          width: 70,
          height: 69,
          backgroundColor: BoxLogo,
          alignItems: 'center',
          margin: 4,
        }}>
        <Image
          source={source}
          style={{
            width: 55,
            height: 51,
            marginTop: 8,
            borderRadius: 100,
            justifyContent: 'center',
          }}
        />
      </View>

      <View
        style={{
          margin: 5.5,
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 10, marginBottom: 5 }}>{nama}</Text>
          <TouchableOpacity
            style={{
              marginHorizontal: 6,
              backgroundColor: BoxColor,
            }}>
            <Text style={{ fontSize: 10, marginBottom: 5 }}>[+]</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 10, marginBottom: 5 }}>{harga}</Text>
        <Text style={{ fontSize: 10, marginBottom: 5 }}>jumlah</Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={kurangmn}
            style={{
              marginHorizontal: 6,
              backgroundColor: BoxColor,
            }}>
            <Text style={{ fontSize: 10, marginBottom: 5 }}>[-]</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 10, marginBottom: 5 }}>.{jumlahnm}.</Text>
          <TouchableOpacity
            onPress={tambahmn}
            style={{
              marginHorizontal: 6,
              backgroundColor: BoxColor,
            }}>
            <Text style={{ fontSize: 10, marginBottom: 5 }}>[+]</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ItemMinuman = ({ navigation, onPress, selectedImageMN }) => {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [foto, setFoto] = useState(null);

  const addDataMinuman = (nama, harga, foto) => {
    db.collection('minuman')
      .add({
        nama: nama,
        harga: harga,
        foto: foto.uri,
      })
      .then(() => {
        console.log('Data berhasil ditambahkan!');
        setNama('');
        setHarga('');
        setFoto(null);
        setSelectedImageMN(null);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      {selectedImageMN ? (
        <Image
          source={{ uri: selectedImageMN }}
          style={{ width: 70, height: 69 }}
        />
      ) : (
        <TouchableOpacity onPress={onPress}>
          <View
            style={{
              width: 70,
              height: 69,
              backgroundColor: BoxLogo,
              alignItems: 'center',
              margin: 4,
            }}>
            <Text
              style={{
                fontSize: 30,
                marginTop: 15,
              }}>
              [+]
            </Text>
          </View>
        </TouchableOpacity>
      )}
      <View
        style={{
          margin: 5.5,
        }}>
        <TextInput
          value={nama}
          onChangeText={(text) => setNama(text)}
          style={{ fontSize: 10, marginBottom: 5 }}
          placeholder="Nama Minuman"
        />
        <TextInput
          value={harga}
          onChangeText={(text) => setHarga(text)}
          keyboardType="number-pad"
          style={{ fontSize: 10 }}
          placeholder="Harga Minuman"
        />
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => addDataMinuman(nama, harga, foto)}>
          <AntDesign name="check" size={12} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};



const HomeMenu = ({ navigation }) => {
  const [selectedImageMK, setSelectedImageMK] = useState(null);
  const [selectedImageMN, setSelectedImageMN] = useState(null);
  const [jumlah, setJumlah] = useState(0);
  const [jumlahnm, setJumlahmn] = useState(0);

  const handleChoosePhotoMK = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImageMK(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderAfterLogin onPress={null} />
      <View style={styles.line} />
      <Image
        style={{ alignSelf: 'center', height: 20, marginVertical: 20 }}
        source={MenuLogo}
      />
      <View style={styles.line} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 38,
          marginVertical: 12,
        }}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.boxLogo}>
            <Image source={InputMakanan} />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.boxLogo}>
            <Image style={{}} source={InputMinuman} />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 41,
          backgroundColor: BoxColor,
          height: 20,
        }}>
        <Text style={styles.fieldText}>Makanan</Text>
        <View style={{ width: 2, backgroundColor: 'black' }} />
        <Text style={styles.fieldText}>Minuman</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10.5,
          marginVertical: 19,
        }}>
        <ScrollView>
          <View>
            <ItemMakanan
              source={Mie}
              nama="Mie Rebus"
              harga="Rp. 7000"
              jumlah={jumlah}
              tambah={() => setJumlah(jumlah + 1)}
              kurang={() => setJumlah(jumlah - 1)}
            />
            <ItemMinuman />
            <ItemMinuman />
            <ItemMinuman />>
          </View>
        </ScrollView>
        <ScrollView vertical>
          <ItemMNn
            source={Kopi}
            nama="Kopi Hitam"
            harga="Rp. 6000"
            jumlahnm={jumlahnm}
            tambahmn={() => setJumlahmn(jumlahnm + 1)}
            kurangmn={() => setJumlahmn(jumlahnm - 1)}
          />
          <ItemMinuman />
          <ItemMinuman />
          <ItemMinuman />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeMenu;

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
