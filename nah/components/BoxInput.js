import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { BoxColor, TextCoklat, TextHitam } from '../Utils/color';

const BoxInput = ({
  placeholder,
  secureTextEntry,
  type,
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.container(type)}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default BoxInput;

const styles = StyleSheet.create({
  container: (type) => ({
    width: 271,
    height: 38,
    marginTop: type === 'register' ? 1 : 22,
    borderRadius: 10,
    backgroundColor: BoxColor,
  }),
  input: {
    width: 270,
    height: 37,
    borderRadius: 10,
    padding: 16,
  },
});
