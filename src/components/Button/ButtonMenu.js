import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Pru from '../../assets/svg/a.svg';
import Pru2 from '../../assets/svg/email.svg';
import TypeIcon from './TypeIcon';
const ButtonMenu = ({title, type, navigation, url}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(url)}>
      <View style={styles.icono}>
        <TypeIcon type={type} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.linecontainer}>
        <Text style={styles.line}>─────</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonMenu;

const styles = StyleSheet.create({
  container: {
    width: '40%',
    height: 'auto',
    backgroundColor: '#f5f6f7',
    padding: 10,
    margin: 10,

    borderRadius: 10,
    shadowColor: '#c1c1c1',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  icono: {},
  text: {
    alignItems: 'center',
  },
  title: {
    alignItems: 'center',
    fontSize: 18,
  },
  linecontainer: {
    alignItems: 'center',
    color: 'red',
    fontSize: 25,
  },
  line: {
    alignItems: 'center',
    color: 'red',
    fontSize: 25,
  },
});
