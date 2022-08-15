import {FlatList} from 'react-native';
import React from 'react';
import Layout from '../../layout/Layout';
import Header from '../../components/HeaderMyPets/HeaderMyPets';
import pets from '../../assets/pets.json';
import Card from '../Pets/CardPet';

const Mypet = navigation => {
  return (
    <Layout>
      <Header navigation={navigation} />
      <FlatList
        data={pets.pets}
        renderItem={({item}) => <Card {...item} />}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
};

export default Mypet;
