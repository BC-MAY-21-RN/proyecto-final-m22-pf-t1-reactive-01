import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../../components/Header/Header';
import {styles} from './style';
import OptionMenu from '../../../components/OptionMenu/OptionMenu';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.Titte}>Settings</Text>
      <View style={styles.menuContai}>
        <OptionMenu title="Change password" type="Lock" />
        <OptionMenu title="Delete account" type="Trash" />
        <OptionMenu title="Invite a friends" type="Invite" />
        <OptionMenu title="About us" type="Hiy" />
      </View>
    </View>
  );
};

export default SettingScreen;
