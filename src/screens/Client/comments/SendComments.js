import {View, Text} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import Header from '../../../components/Header/Header';
import {styles} from './styles';
import Button from '../../../components/Button/CustomButton';
import Input from '../../../components/InputComment/Input';
import {firebase} from '@react-native-firebase/storage';

const SendComments = navigation => {
  return (
    <Layout>
      <Header navigation={navigation} />
      <View style={styles.containerText}>
        <Text style={styles.text}>Please enter your comment</Text>
        <Input type="comment" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={'Send'} />
      </View>
    </Layout>
  );
};

export default SendComments;
