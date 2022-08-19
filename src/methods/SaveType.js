import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const savetype = async type => {
  const current = auth().currentUser;
  await firestore.collection('users').doc(current.uid).add({type: type});
};
