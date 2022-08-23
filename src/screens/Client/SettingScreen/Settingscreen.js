import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../../components/Header/Header';
import {styles} from './style';
import OptionMenu from '../../../components/OptionMenu/OptionMenu';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.Titte}>Settings</Text>
      <View style={styles.menuContai}>
        <OptionMenu title="Change password" type="Lock" />
        <OptionMenu
          title="Delete account"
          navigation={navigation}
          type="Trash"
        />
        <OptionMenu
          title="Invite a friends"
          navigation={navigation}
          type="Invite"
        />
        <OptionMenu title="About us" navigation={navigation} type="Hiy" />
      </View>
    </View>
  );
};

export default SettingScreen;
