import {View, Text} from 'react-native';
import React from 'react';
import ButtonMenu from '../Button/ButtonMenu';
import {styles} from './styles';
const ClientMenu = () => {
  return (
    <View style={styles.container}>
      <ButtonMenu title="My Pets" type="b" />
      <ButtonMenu title="Request Walker" type="d" />
    </View>
  );
};

export default ClientMenu;
