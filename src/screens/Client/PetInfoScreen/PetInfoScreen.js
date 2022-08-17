import {View, Text} from 'react-native';
import React from 'react';
import Button from '../../../components/Button/CustomButton';
import Layout from '../../../layout/Layout';
import Header from '../../../components/Header/Header';
import Input from '../../../components/InputPetInfo/Input';
import {styles} from '../Pets/styles';

const PetInfoScreen = navigation => {
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={navigation} />
          <Text style={styles.text}>Basic Info</Text>
        </View>
        <View
          style={[styles.body, {flexDirection: 'column', marginBottom: 100}]}>
          <View style={{flexDirection: 'row'}}>
            <Input type="firstname" />
            <Input type="lastname" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Input type="typepet" />
            <Input type="breed" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Input type="age" />
            <Input type="gender" />
          </View>

          <Input type="color" />
          <Input type="description" />
        </View>

        <View style={styles.buttonContainer}>
          <Button title={'Next'} />
        </View>
      </View>
    </Layout>
  );
};

export default PetInfoScreen;
