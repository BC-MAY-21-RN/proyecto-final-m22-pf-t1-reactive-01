import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../components/Button/CustomButton';
import Layout from '../../../layout/Layout';
import Header from '../../../components/Header/Header';
import Input from '../../../components/InputPetInfo/Input';
import {styles} from './styles';
import * as Yup from 'yup';
import {useFormik} from 'formik';

const PetInfoScreen = ({navigation}) => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: true,
    onSubmit: formValue => {
      signup(
        formValue.fullname,
        formValue.email,
        formValue.confirmPassword,
        navigation,
      );
    },
  });

  return (
    <Layout>
      <Header navigation={navigation} />
      <Text style={styles.text}>Basic Info</Text>
      <Input
        type="firstname"
        error={formik.errors.name}
        value={formik.values.name}
      />
      <View style={styles.row}>
        <Input
          type="typepet"
          error={formik.errors.typepet}
          value={formik.values.typepet}
        />
        <Input
          type="breed"
          error={formik.errors.breed}
          value={formik.values.breed}
        />
      </View>
      <View style={styles.row}>
        <Input type="age" error={formik.errors.age} value={formik.values.age} />
        <Input
          type="gender"
          error={formik.errors.gender}
          value={formik.values.gender}
        />
      </View>
      <Input type="color" />
      <Input type="description" />
      <View style={styles.buttonContainer}>
        <Button title={'Next'} />
      </View>
    </Layout>
  );
};

function initialValues() {
  return {
    name: '',
    typepet: '',
    breed: '',
    age: '',
    gender: '',
    color: '',
    description: '',
  };
}

function validationSchema() {
  return {
    name: Yup.string().required('Field Required'),
    typepet: Yup.string().required('Field Required'),
    breed: Yup.string().required('Field Required'),
    age: Yup.string().required('Field Required'),
    gender: Yup.string().required('Field Required'),
    color: Yup.string().required('Field Required'),
    description: Yup.string().required('Field Required'),
  };
}

export default PetInfoScreen;
