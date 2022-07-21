import React from 'react';
import {View} from 'react-native';
import Button from '../../components/Button/CustomButton';
import Layout from '../../layout/Layout';
import Input from '../../components/Inputs/Input';
import Header from '../../components/Header/Header';
import {styles} from './styles';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useState} from 'react';

const SignInScreen = ({navigation}) => {
  const [status, setStatus] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: true,
    onSubmit: formValue => {
      alert('work');
    },
  });

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={navigation} />
        </View>
        <View style={styles.body}>
          <Input
            type="name"
            title="Full name"
            error={formik.errors.fullname}
            value={formik.values.fullname}
            onChangeText={text => formik.setFieldValue('fullname', text)}
          />

          <Input
            type="email"
            title="Email"
            error={formik.errors.email}
            value={formik.values.email}
            onChangeText={text => formik.setFieldValue('email', text)}
          />
          <Input
            type="password"
            title="Password"
            error={formik.errors.password}
            value={formik.values.password}
            onChangeText={text => formik.setFieldValue('password', text)}
          />

          <Input
            type="password"
            title="Confirm Paassword"
            error={formik.errors.confirmPassword}
            values={formik.values.confirmPassword}
            onChangeText={text => formik.setFieldValue('confirmPassword', text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'Sign In'} onPress={formik.handleSubmit} />
        </View>
      </View>
    </Layout>
  );
};
function initialValues() {
  return {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
}

function validationSchema() {
  return {
    fullname: Yup.string().required('Full name is required'),
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('The password is required'),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref('password'), 'password must match']),
  };
}

export default SignInScreen;
