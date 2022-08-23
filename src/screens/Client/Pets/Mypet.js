import {FlatList, View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Layout from '../../../layout/Layout';
import HeaderPrincipal from '../../../components/Header/Header';
import Card from './CardPet';
import {styles} from './styles';
import ButtonAdd from '../../../components/Button/ButtonAdd';
import {retrivePets} from '../../../methods/SavePet';

const Mypet = ({navigation}) => {
  const [pets, setPets] = useState([]);

  const traerDatos = async () => {
    const datos = await retrivePets();
    setPets(datos);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      traerDatos();
    }, 25000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <HeaderPrincipal navigation={navigation} />
      <View style={styles.containerTittle}>
        <Text style={styles.title}>My pets</Text>
      </View>
      <FlatList
        data={pets}
        renderItem={({item}) => <Card {...item} />}
        keyExtractor={item => item.namePet}
      />
      <View style={styles.buttonContainer}>
        <ButtonAdd onPress={() => navigation.navigate('PetFormScreen')} />
      </View>
    </Layout>
  );
};

export default Mypet;
