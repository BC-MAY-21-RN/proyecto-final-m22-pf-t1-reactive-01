import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const getListWalkers = async () => {
  try {
    const arrayWalker = [];
    const usersQuerySnapshot = await firestore().collection('users').get();
    usersQuerySnapshot.forEach(documentSnapshot => {
      if (documentSnapshot.data().type === 'walker') {
        arrayWalker.push({id: documentSnapshot.id, ...documentSnapshot.data()});
      }
    });
    if (arrayWalker.length > 0) {
      return arrayWalker;
    } else {
      return arrayWalker;
    }
  } catch (error) {
    Alert.alert('data not found');
  }
};
