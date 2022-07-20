import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/Button/CustomButton';
import Layout from '../../layout/Layout';
import {styles} from './styles';
import SocialButton from '../../components/Button/SocialButton';
import Input from '../../components/Inputs/Input';
import Logo from '../../assets/svg/logo.svg';
import SignInScreen from '../SingInScreen/SignInScreen';
import * as Yup from 'yup';
import {useFormik} from 'formik';

const LoginScreen = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.header}>
          <Logo width={150} height={150} />
        </View>

        <View style={styles.body}>
          <Text
            style={styles.forPass}
            onPress={() => navigation.navigate('ResetPassword')}>
            Forgot your password??
          </Text>
        </View>

        <View style={styles.socialContainer}>
          <SocialButton type="facebook" size={62} />
          <SocialButton type="google" size={60} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title={'Login'} />
          <Text style={styles.signup}>Sign Up with email</Text>
        </View>
      </View>
    </Layout>
  );
};

export default LoginScreen;
