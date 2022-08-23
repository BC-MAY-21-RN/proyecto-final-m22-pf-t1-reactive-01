import {Text, View} from 'react-native';
import React from 'react';
import Layout from '../../layout/Layout';
import {styles} from '../../screens/Client/Home/styles';
import ButtonMenu from '../../components/Button/ButtonMenu';

const HomeScreen = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.containerButtons}>
        <View style={styles.buttons}>
          <ButtonMenu
            type="acceptRides"
            title="Accept Rides"
            //onPress={() => navigation.navigate('Login')}
          />
          <ButtonMenu
            type="historyWalker"
            title="history"
            //onPress={() => navigation.navigate('Login')}
          />
          <ButtonMenu
            type="profileWalker"
            title="profile"
            //onPress={() => navigation.navigate('Login')}
          />
          <ButtonMenu
            type="exitWalker"
            title="exit"
            //onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
