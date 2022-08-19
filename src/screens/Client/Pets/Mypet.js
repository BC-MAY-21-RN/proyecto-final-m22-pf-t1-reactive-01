import {FlatList, View, Text} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import HeaderPrincipal from '../../../components/Header/Header';
import Card from './CardPet';
import {styles} from './styles';
import ButtonAdd from '../../../components/Button/ButtonAdd';
const data = [
  {
    id: 1,
    name: 'cucu ',
    image:
      'https://cdn.mequieroir.com/wp-content/uploads/2019/10/mascota-espana-blanca-1024x639.jpg',
    gender: 'Male',
    color: 'rojo ',
    age: '2',
    characteristics: 'he have very long hair and red color ',
  },
  {
    id: 2,
    name: 'pepe ',
    image:
      'https://cdn.mequieroir.com/wp-content/uploads/2019/10/mascota-espana-blanca-1024x639.jpg',
    gender: 'Male',
    color: 'blanco ',
    age: '2',
    characteristics: 'he not have tail',
  },
  {
    id: 3,
    name: 'francisco ',
    image:
      'https://cdn.mequieroir.com/wp-content/uploads/2019/10/mascota-espana-blanca-1024x639.jpg',
    gender: 'Male',
    color: 'negro ',
    age: '2',
    characteristics:
      'It is a quite friendly and calm dog. It likes to take naps and responds to the call of "hotdog"',
  },
];
const Mypet = ({navigation}) => {
  return (
    <Layout>
      <HeaderPrincipal navigation={navigation} />
      <View style={styles.containerTittle}>
        <Text style={styles.textTittle}>My pets</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <Card {...item} />}
        keyExtractor={item => item.id}
      />
      <View style={styles.buttonContainer}>
        <ButtonAdd onPress={() => navigation.navigate('PetFormScreen')} />
      </View>
    </Layout>
  );
};

export default Mypet;
