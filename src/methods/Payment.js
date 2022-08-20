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
    })
    .then(() => {
      Alert.alert('User added succesfully');
      navigation.navigate('PaymentScreen');
    })
    .catch(error => console.log(error));
};

export const checkPayment = (number, expiry, code) => {
  const card = {number: '4242424242424242', expiry: '4242', code: '424'};
  if (number === card.number && expiry === card.expiry && code === card.code) {
    Alert.alert('payment passed');
  } else {
    Alert.alert('payment rechazed ');
  }
};
