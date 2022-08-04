import React from 'react';
import {View, Text} from 'react-native';
import Layout from '../../../layout/Layout';
import Header from '../../../components/Header/Header';
import {styles} from './styles';
import SwitchBotton from '../../../components/Switch/Switch';

const ChoiseUser = () => {
  return (
    <Layout>
      <Header />
      <View style={styles.container}>
        <Text style={styles.mainText}>¿Are you?</Text>
      </View>
      <View style={styles.switcher}>
        <Text style={styles.switcherText}>Owner</Text>
        <View>
          <SwitchBotton />
        </View>
        <Text style={styles.switcherText}>Walker</Text>
        <SwitchBotton />
      </View>
    </Layout>
  );
};

export default ChoiseUser;
