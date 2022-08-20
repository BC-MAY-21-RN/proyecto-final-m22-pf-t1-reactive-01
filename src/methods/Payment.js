import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const addPayment = (date, walker, price, navigation) => {
  const uid = auth().currentUser.uid;
  firestore()
    .collection('payments')
    .add({
      uid: uid,
      walker: walker,
      date: date,
      price: price,
      hours: 2,
    })
    .then(() => {
      Alert.alert('successful payment');
      navigation.navigate('Menus');
    })
    .catch(error => console.log(error));
};

export const checkPayment = (number, expiry, code, navigation) => {
  const card = {number: '4242424242424242', expiry: '4242', code: '424'};
  const date = new Date().toLocaleString();
  const walker = 'marito';
  const price = '100';
  if (number === card.number && expiry === card.expiry && code === card.code) {
    addPayment(date, walker, price, navigation);
  } else {
    Alert.alert('payment refused try again ');
  }
};
