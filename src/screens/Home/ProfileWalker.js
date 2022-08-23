import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import Layout from '../../layout/Layout';
import LabelMessage from '../../components/LabelMessage/LabelMessage';

const ProfileWalker = ({navigation}) => {
  return (
    <Layout>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={require('../../assets/Placeholders/placeholder-img.jpg')}
            style={styles.imagen}
          />
        </View>
        <View style={styles.info}>
          <LabelMessage title={'nombre'} text="" />
          <LabelMessage title={'email'} text="" />
          <LabelMessage title={'stars'} text="3" />
        </View>
      </View>
    </Layout>
  );
};

export default ProfileWalker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  image: {
    alignItems: 'center',
  },
  imagen: {width: 200, height: 200, borderRadius: 150},
  textInfo: {fontSize: 25},
});
