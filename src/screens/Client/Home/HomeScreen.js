import {View} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import ClientMenu from '../../../components/Menues/ClientMenu';
import {styles} from './styles';

const HomeScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <ClientMenu />
      </View>
    </Layout>
  );
};

export default HomeScreen;
