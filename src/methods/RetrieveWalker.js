import firestore from '@react-native-firebase/firestore';
import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

export default function useWalkers() {
  const [walkers, setWalkers] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      cargarLista();
    }, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getList = async () => {
    try {
      const arrayWalker = [];
      const usersQuerySnapshot = await firestore().collection('users').get();
      usersQuerySnapshot.forEach(documentSnapshot => {
        if (documentSnapshot.data().type === 'walker') {
          arrayWalker.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        }
      });
      return arrayWalker;
    } catch (error) {
      Alert.alert(' error de conexion');
    }
  };

  const cargarLista = async () => {
    const resp = await getList();

    console.log(resp.length);
    if (resp.length > 0) {
      setWalkers(resp);
    } else {
      Alert.alert(' no hay datos');
    }
  };

  return {walkers, cargarLista};
}
