import {FlatList, View, Text} from 'react-native';
import React from 'react';
import Layout from '../../layout/Layout';
import HeaderPrincipal from '../../components/Header/Header';
import Card from '../Pets/CardPet';
import {styles} from './styles';
import ButtonAdd from '../../components/Button/ButtonAdd';

const Mypet = navigation => {
  return (
    <Layout>
      <HeaderPrincipal navigation={navigation} />
      <View style={styles.containerTittle}>
        <Text style={styles.textTittle}>My pets</Text>
      </View>
      <FlatList
        data={pets.pets}
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
