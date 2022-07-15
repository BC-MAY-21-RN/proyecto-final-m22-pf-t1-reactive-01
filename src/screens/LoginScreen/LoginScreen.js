import React, {useState} from 'react';
import {Text, View, StatusBar, Image, TextInput} from 'react-native';
import Button from '../../components/Button/CustomButton';
import Layout from '../../layout/Layout';
import {styles} from './styles';
import SocialButton from '../../components/Button/SocialButton';
import Input from '../../components/Inputs/Input';

const LoginScreen = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.body}>
        <Input type="email" />
        <Input type="password" state={true} />
        <Text onPress={() => navigation.navigate('Home')}>
          Frogot your password??
        </Text>
      </View>
      <View style={styles.socialContainer}>
        <SocialButton type="google" size={50} />
        <SocialButton type="facebook" size={50} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={'Login'} />
      </View>
    </Layout>
  );
};

export default LoginScreen;
