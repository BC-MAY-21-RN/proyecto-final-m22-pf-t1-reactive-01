import {View} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import ButtonMenu from '../../../components/Button/ButtonMenu';
import {styles} from './styles';
import NearItem from '../../../components/NearItem/NearItem';
import {ScrollView} from 'react-native-gesture-handler';
const HomeScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.containerButtons}>
          <ButtonMenu title="My Pets" type="mypets" />
          <ButtonMenu title="Request Walker" type="find" />
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
