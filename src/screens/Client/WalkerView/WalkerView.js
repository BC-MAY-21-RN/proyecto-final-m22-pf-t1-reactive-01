import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Layout from '../../../layout/Layout';
import LabelMessage from '../../../components/LabelMessage/LabelMessage';
import Button from '../../../components/Button/CustomButton';
import Star from '../../../assets/svg/star.svg';
const WalkerView = ({navigation}) => {
  const route = useRoute();
  const {firstname, star, km} = route.params.data;

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
          <LabelMessage title={'paseador'} text={firstname} />
          <LabelMessage title={'star'} text={star} />
          <LabelMessage title={'km'} text={km} />
        </View>
      </View>
      <View style={styles.button}>
        <Button title={'Contratar'} />
      </View>
    </Layout>
  );
};

export default WalkerView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignItems: 'center',
  },
  imagen: {width: 200, height: 200, borderRadius: 150},
  textInfo: {fontSize: 25},
});
