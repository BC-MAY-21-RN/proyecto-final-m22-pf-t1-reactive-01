import {Text, View} from 'react-native';
import React from 'react';
import Layout from '../../layout/Layout';
import {styles} from '../../screens/Client/Home/styles';
import ButtonMenu from '../../components/Button/ButtonMenu';
import {signOut} from '../../methods/Exit';
const HomeScreen = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.containerButtons}>
        <View style={styles.buttons}>
          <ButtonMenu
            type="acceptRides"
            title="Rides"
            onPress={() => navigation.navigate('Rides')}
          />

          <ButtonMenu
            type="profileWalker"
            title="Profile"
            onPress={() => navigation.navigate('ProfileWalker')}
          />
          <ButtonMenu
            type="exitWalker"
            title="Exit"
            onPress={() => signOut(navigation)}
          />
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
/*

<ButtonMenu
            type="historyWalker"
            title="History"
            onPress={() => navigation.navigate('HistoryPaymentsWalkers')}
          /> 
          */
