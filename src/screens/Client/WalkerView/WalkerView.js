import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Layout from '../../../layout/Layout';
import LabelMessage from '../../../components/LabelMessage/LabelMessage';
import Button from '../../../components/Button/CustomButton';
import Header from '../../../components/Header/Header';
const WalkerView = ({navigation}) => {
  const route = useRoute();
  const {firstname, star, km, id} = route.params.data;
  return (
    <Layout>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={require('../../../assets/image/perfil/messi.jpeg')}
            style={styles.imagen}
          />
        </View>
        <View style={styles.info}>
          <LabelMessage title={'Walker Name'} text={firstname} />
          <LabelMessage title={'Rate'} text={star + '  stars'} />
          <LabelMessage title={'Km'} text={km} />
        </View>
      </View>
      <View style={styles.button}>
        <Button
          title={'Contratar'}
          onPress={() => navigation.navigate('PaymentScreen', {firstname, id})}
        />
      </View>
    </Layout>
  );
};

export default WalkerView;

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

