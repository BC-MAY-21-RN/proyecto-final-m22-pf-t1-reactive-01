import {View} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import ClientMenu from '../../../components/Menues/ClientMenu';
import {styles} from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <Layout>
      <ClientMenu navigation={navigation} />
    </Layout>
  );
};

export default HomeScreen;
