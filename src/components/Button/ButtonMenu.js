import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TypeIcon from './TypeIcon';
import theme from '../../assets/theme/theme';
const ButtonMenu = ({title, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.icono}>
        <TypeIcon type={type} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonMenu;

const styles = StyleSheet.create({
  container: {
    width: theme.WIDTH_SCREEN / 2.7,
    height: theme.HEIGHT_SCREEN / 5,
    backgroundColor: '#f5f6f7',
    margin: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  text: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    textAling: 'center',
    fontSize: theme.FONT_SIZE_XLARGE,
  },
});
