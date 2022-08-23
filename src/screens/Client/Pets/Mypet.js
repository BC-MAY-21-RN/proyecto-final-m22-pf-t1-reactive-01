import {FlatList, View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Layout from '../../../layout/Layout';
import HeaderPrincipal from '../../../components/Header/Header';
import Card from './CardPet';
import {styles} from './styles';
import ButtonAdd from '../../../components/Button/ButtonAdd';
import {retrivePets} from '../../../methods/SavePet';
const data = [
  {
    id: 1,
    namePet: 'cucu ',
    image:
      'https://cdn.mequieroir.com/wp-content/uploads/2019/10/mascota-espana-blanca-1024x639.jpg',
    gender: 'Male',
    color: 'rojo ',
    age: '2',
    description: 'he have very long hair and red color ',
  },
  {
    id: 2,
    namePet: 'pepe ',
    image:
      'https://cdn.mequieroir.com/wp-content/uploads/2019/10/mascota-espana-blanca-1024x639.jpg',
    gender: 'Male',
    color: 'blanco ',
    age: '2',
    description: 'he not have tail',
  },
  {
    id: 3,
    namePet: 'francisco ',
    image:
      'https://cdn.mequieroir.com/wp-content/uploads/2019/10/mascota-espana-blanca-1024x639.jpg',
    gender: 'Male',
    color: 'negro ',
    age: '2',
    description:
      'It is a quite friendly and calm dog. It likes to take naps and responds to the call of "hotdog"',
  },
];
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
        <Text style={styles.textTittle}>My pets</Text>
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
