import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../../components/Header/Header';
import {styles} from './style';
import HeaderProffile from '../../../components/HeaderProffile/HeaderProffile';
import OptionMenu from '../../../components/OptionMenu/OptionMenu';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.Titte}>Profile</Text>
      <HeaderProffile />
      <View style={styles.menuContai}>
        <OptionMenu title="Edit profile" type="User" />
        <OptionMenu title="Contact Us" type="Phone" />
        <OptionMenu title="Service history" type="Hiy" />
      </View>
    </View>
  );
};

export default ProfileScreen;
