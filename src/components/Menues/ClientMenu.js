import {View, Text} from 'react-native';
import React from 'react';
import ButtonMenu from '../Button/ButtonMenu';
import {styles} from './styles';
const ClientMenu = () => {
  return (
    <View style={styles.container}>
      <ButtonMenu title="Profile" type="a" />
      <ButtonMenu title="My Pets" type="b" />
      <ButtonMenu title="Settings" type="c" />
      <ButtonMenu title="Request Walker" type="d" />
      <ButtonMenu title="perfil" type="e" />
      <ButtonMenu title="About" type="e" />
    </View>
  );
};

export default ClientMenu;
