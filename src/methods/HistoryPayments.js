import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const getHistoryPayments = async () => {
  const uid = auth().currentUser.uid;
  try {
    const arrayHistory = [];
    const usersQuerySnapshot = await firestore().collection('payments').get();
    usersQuerySnapshot.forEach(documentSnapshot => {
      if (documentSnapshot.data().uid === uid) {
        arrayHistory.push({
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        });
      }
    });
    return arrayHistory;
  } catch (error) {
    Alert.alert('data not found');
  }
};
