import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import Layout from '../../layout/Layout';
import LabelMessage from '../../components/LabelMessage/LabelMessage';

import {getPerfil} from '../../methods/DataWalker';
import {useEffect} from 'react';
import {useState} from 'react';

const ProfileWalker = ({navigation}) => {
  const [info, setInfo] = useState([]);

  const traerDatos = async () => {
    const datis = await getPerfil();
    setInfo(datis);
  };

  useEffect(() => {
    traerDatos();
  }, []);
  return (
    <Layout>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={require('../../assets/image/perfil/messi.jpeg')}
            style={styles.imagen}
          />
        </View>
        <View style={styles.info}>
          {info.map((item, key) => (
            <View key={key}>
              <LabelMessage title={'nombre'} text={item.firstname} />
              <LabelMessage title={'email'} text={item.email} />
              <LabelMessage title={'stars'} text={item.star} />
            </View>
          ))}
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
