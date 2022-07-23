import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import ListScroll from '../../../components/ListScroll/ListScroll';
import Input from '../../../components/Inputs/Input';
import ButtonMenu from '../../../components/Button/ButtonMenu';

const HomeScreen = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.botones}>
          <ButtonMenu
            title="perfil"
            type="a"
            navigation={navigation}
            url="HomeClient"
          />
          <ButtonMenu
            title="perfil"
            type="b"
            navigation={navigation}
            url="HomeClient"
          />
          <ButtonMenu
            title="perfil"
            type="c"
            navigation={navigation}
            url="HomeClient"
          />
          <ButtonMenu
            title="perfil"
            type="d"
            navigation={navigation}
            url="HomeClient"
          />
          <ButtonMenu
            title="perfil"
            type="e"
            navigation={navigation}
            url="HomeClient"
          />
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  texto: {
    backgroundColor: '#b3b0ff',
    height: 400,
  },
  botones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#dde4f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
