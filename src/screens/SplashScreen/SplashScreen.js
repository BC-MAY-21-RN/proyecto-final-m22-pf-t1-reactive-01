import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Logo from '../../assets/svg/logo.svg';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Onboarding');
  }, 2000);
  return (
    <View style={styles.container}>
      <StatusBar style={styles.containerStatusBar} />
      <Logo width={180} height={180} />
      <Text style={styles.logo}>MY PETS</Text>
    </View>
  );
};

export default SplashScreen;
