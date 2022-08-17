import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../../../components/Header/Header';
import {styles} from './style';
import Layout from '../../../../layout/Layout';
import Input from '../../../../components/Inputs/Input';
import CustomButton from '../../../../components/Button/CustomButton';


const EditProfile = () => {
  return (
    <Layout>
      <Header />
      <View style={styles.container}>
        <Text style={styles.Titte}>Edit user data</Text>
        <Input
        type="name"
        title="Full Name"/>
        <Input
        type="email"
        title="Email"/>
        <Input
        type="tel"
        title="Cell phone number"/>
        <View style={styles.butt}>
        <CustomButton
        title="Edit"/>
        </View>
      </View>
    </Layout>
  );
};

export default EditProfile;
