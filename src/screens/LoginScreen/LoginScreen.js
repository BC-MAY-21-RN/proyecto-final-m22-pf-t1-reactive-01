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
import Formik from 'formik';
import * as Yup from 'yup';
import SocialButton from '../../components/Button/SocialButton';
import Input from '../../components/Inputs/Input';
import Logo from '../../assets/svg/logo.svg';
import SignInScreen from '../SingInScreen/SignInScreen';

const LoginScreen = ({navigation}) => {
  const [status, setStatus] = useState(true);

  const formik = Formik.useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onsubmit: formValue => {
      setStatus(true);
      console.log('formulario enviado...');
      console.log(formValue);
    },
  });

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.header}>
          <Logo width={150} height={150} />
        </View>

        <View style={styles.body}>
          <Input
            title="Email*"
            err={formik.errors.email}
            textContentType="emailAddress"
            keyboardType="email-address"
            value={formik.values.email}
            onChangeText={text => formik.setFieldValue('email', text)}
          />
          <Input
            title="Password*"
            err={formik.errors.password}
            textContentType="password"
            secureTextEntry={true}
            value={formik.values.password}
            onChangeText={text => formik.setFieldValue('password', text)}
          />
          <Text style={styles.forPass}>Forgot your password??</Text>
        </View>

        <View style={styles.socialContainer}>
          <SocialButton type="facebook" size={62} />
          <SocialButton type="google" size={60} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title={'Login'} onPress={formik.handleSubmit} />
          <Text style={styles.signup}>Sign Up with email</Text>
        </View>
      </View>
    </Layout>
  );
};

function initialValues() {
  return {
    email: '',
    password: '',
  };
}

function validationSchema() {
  return {
    email: Yup.string().email().required('Email error'),
    password: Yup.string().required('Incorrect password'),
  };
}
export default LoginScreen;
