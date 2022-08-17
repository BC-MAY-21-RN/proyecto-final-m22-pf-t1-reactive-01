import {FlatList, View, Text} from 'react-native';
import React from 'react';
import Layout from '../../../layout/Layout';
import HeaderPrincipal from '../../../components/Header/Header';
import CardPet from './CardPet';
import {styles} from './styles';
import ButtonAdd from '../../../components/Button/ButtonAdd';
const data = [
  {
    id: 1,
    name: 'cucu ',
    image:
      'https://cdn.mequieroir.com/wp-content/uploads/2019/10/mascota-espana-blanca-1024x639.jpg',
    male: '2',
    color: 'rojo ',
    age: '2',
    characteristicsm: '2',
  },
  {
    id: 2,
    name: 'pepe ',
    image:
      'https://cdn.mequieroir.com/wp-content/uploads/2019/10/mascota-espana-blanca-1024x639.jpg',
    male: '2',
    color: 'blanco ',
    age: '2',
    characteristicsm: '2',
  },
  {
    id: 3,
    name: 'francisco ',
    image:
      'https://cdn.mequieroir.com/wp-content/uploads/2019/10/mascota-espana-blanca-1024x639.jpg',
    male: '2',
    color: 'negro ',
    age: '2',
    characteristicsm: '2',
  },
];
const Mypet = navigation => {
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
        <ButtonAdd />
      </View>
    </Layout>
  );
};

export default Mypet;
