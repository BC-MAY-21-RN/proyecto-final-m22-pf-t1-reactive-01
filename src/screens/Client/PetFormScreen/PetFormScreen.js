import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../components/Button/CustomButton';
import Layout from '../../../layout/Layout';
import Header from '../../../components/Header/Header';
import Input from '../../../components/InputPetInfo/Input';
import {styles} from './styles';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {savePet} from '../../../methods/SavePet';

const PetInfoScreen = ({navigation}) => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: true,
    onSubmit: formValue => {
      savePet(
        formValue.name,
        formValue.typepet,
        formValue.breed,
        formValue.age,
        formValue.gender,
        formValue.color,
        formValue.description,
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
        onChangeText={text => formik.setFieldValue('name', text)}
        error={formik.errors.name}
        value={formik.values.name}
      />
      <View style={styles.row}>
        <Input
          type="typepet"
          onChangeText={text => formik.setFieldValue('typepet', text)}
          error={formik.errors.typepet}
          value={formik.values.typepet}
        />
        <Input
          type="breed"
          onChangeText={text => formik.setFieldValue('breed', text)}
          error={formik.errors.breed}
          value={formik.values.breed}
        />
      </View>
      <View style={styles.row}>
        <Input
          type="age"
          error={formik.errors.age}
          value={formik.values.age}
          onChangeText={text => formik.setFieldValue('age', text)}
        />
        <Input
          type="gender"
          error={formik.errors.gender}
          value={formik.values.gender}
          onChangeText={text => formik.setFieldValue('gender', text)}
        />
      </View>
      <Input
        type="color"
        onChangeText={text => formik.setFieldValue('color', text)}
        error={formik.errors.color}
        value={formik.values.color}
      />
      <Input
        type="description"
        onChangeText={text => formik.setFieldValue('description', text)}
        error={formik.errors.description}
        value={formik.values.description}
      />
      <View style={styles.buttonContainer}>
        <Button title={'Next'} onPress={formik.handleSubmit} />
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
