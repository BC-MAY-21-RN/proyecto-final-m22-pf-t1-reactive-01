import {View, Text} from 'react-native';
import React from 'react';
import Button from '../../../components/Button/CustomButton';
import Layout from '../../../layout/Layout';
import Header from '../../../components/Header/Header';
import Input from '../../../components/InputPetInfo/Input';
import {styles} from './styles';

const PetInfoScreen = navigation => {
  return (
    <Layout>
      <Header navigation={navigation} />
      <Text style={styles.text}>Basic Info</Text>
      <Input type="firstname" />
      <View style={styles.row}>
        <Input type="typepet" />
        <Input type="breed" />
      </View>
      <View style={styles.row}>
        <Input type="age" />
        <Input type="gender" />
      </View>
      <Input type="color" />
      <Input type="description" />
      <View style={styles.buttonContainer}>
        <Button title={'Next'} />
      </View>
    </Layout>
  );
};

export default PetInfoScreen;
