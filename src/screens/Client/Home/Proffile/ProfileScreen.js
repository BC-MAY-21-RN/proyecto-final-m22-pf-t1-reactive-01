import {View, Text, Image} from 'react-native';
import React from 'react';
import Header from '../../../../components/Header/Header';
import {styles} from './style';
import HeaderProffile from '../../../../components/HeaderProffile/HeaderProffile';
import OptionMenu from '../../../../components/OptionMenu/OptionMenu';

const ProfileScreen = () => {
  return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.Titte}>Profile</Text>
        <HeaderProffile />
        <View style={styles.menuContai}>
          <OptionMenu title="My pets" type="Star" />
          <OptionMenu title="My favorite walkers" type="Star" />
          <OptionMenu title="Service history" type="Hiy" />
          <OptionMenu title="Settings" type="Stti" />
        </View>
      </View>
    
  );
};

export default ProfileScreen;
