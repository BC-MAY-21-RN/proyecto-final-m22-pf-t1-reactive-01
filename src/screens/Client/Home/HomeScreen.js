import {View} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import ClientMenu from '../../../components/Menues/ClientMenu';
import {styles} from './styles';
import NearItem from '../../../components/NearItem/NearItem';
import {ScrollView} from 'react-native-gesture-handler';
const HomeScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <ClientMenu />
        <View style={styles.nearContainer}>
          <ScrollView>
            <NearItem />
            <NearItem />
            <NearItem />
          </ScrollView>
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
