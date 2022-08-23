import {Text, View} from 'react-native';
import React from 'react';
import Layout from '../../layout/Layout';
import {styles} from '../../screens/Client/Home/styles';
import ButtonMenu from '../../components/Button/ButtonMenu';

const HomeScreen = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.containerButtons}>
        <ButtonMenu
          type="history"
          onPress={() => navigation.navigate('Login')}
        />
        <ButtonMenu />
        <ButtonMenu type="exit" onPress={() => navigation.navigate('Login')} />
      </View>
    </Layout>
  );
};

export default HomeScreen;
