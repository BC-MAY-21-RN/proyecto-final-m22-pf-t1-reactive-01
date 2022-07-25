import {View, Text} from 'react-native';
import React from 'react';
import ButtonMenu from '../Button/ButtonMenu';
import {styles} from './styles';
const ClientMenu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ButtonMenu
        title="perfil"
        type="a"
        navigation={navigation}
        url="HomeClient"
      />
      <ButtonMenu
        title="perfil"
        type="b"
        navigation={navigation}
        url="HomeClient"
      />
      <ButtonMenu
        title="perfil"
        type="c"
        navigation={navigation}
        url="HomeClient"
      />
      <ButtonMenu
        title="perfil"
        type="d"
        navigation={navigation}
        url="HomeClient"
      />
      <ButtonMenu
        title="perfil"
        type="e"
        navigation={navigation}
        url="HomeClient"
      />
      <ButtonMenu
        title="perfil"
        type="e"
        navigation={navigation}
        url="HomeClient"
      />
    </View>
  );
};

export default ClientMenu;
