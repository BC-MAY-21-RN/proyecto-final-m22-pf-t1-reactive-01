import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Layout from '../../../layout/Layout';
import LabelMessage from '../../../components/LabelMessage/LabelMessage';
import Button from '../../../components/Button/CustomButton';
const WalkerView = ({navigation}) => {
  const route = useRoute();
  const {hour, id, km} = route.params.data;

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={require('../../../assets/Placeholders/placeholder-img.jpg')}
            style={styles.imagen}
          />
        </View>
        <View style={styles.info}>
          <LabelMessage title={'paseador'} text={id} />
          <LabelMessage title={'horas'} text={hour} />
          <LabelMessage title={'km'} text={km} />
        </View>
        <View style={styles.resenias}></View>
      </View>
      <View>
        <Button title={'Contratar'} />
      </View>
    </Layout>
  );
};

export default WalkerView;

const styles = StyleSheet.create({
  container: {},
  image: {
    alignItems: 'center',
  },
  imagen: {width: 200, height: 200, borderRadius: 150},
  info: {},
  textInfo: {fontSize: 25},
  contreseniasainer: {},
});
/*
 
*/
