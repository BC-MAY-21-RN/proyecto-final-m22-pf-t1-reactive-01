import React, {useState} from 'react';
import {Text, View, StatusBar, Image, TextInput} from 'react-native';
import Button from '../../components/Button/CustomButton';
import Layout from '../../layout/Layout';
import {styles} from './styles';
import SocialButton from '../../components/Button/SocialButton';

const LoginScreen = () => {
  return (
    <Layout>
      <SocialButton type="google" size={50} />
    </Layout>
  );
};

export default LoginScreen;
