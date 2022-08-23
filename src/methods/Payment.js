import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const addPayment = (date, price, navigation, firstname, id) => {
  const uid = auth().currentUser.uid;
  firestore()
    .collection('payments')
    .add({
      uid: uid,
      uidWalker: id,
      nameWalker: firstname,
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

export const checkPayment = (
  number,
  expiry,
  code,
  navigation,
  firstname,
  id,
) => {
  const card = {number: '4242424242424242', expiry: '4242', code: '424'};
  const date = new Date().toLocaleString();
  const price = '100';
  if (number === card.number && expiry === card.expiry && code === card.code) {
    addPayment(date, price, navigation, firstname, id);
  } else {
    Alert.alert('payment refused try again ');
  }
};
