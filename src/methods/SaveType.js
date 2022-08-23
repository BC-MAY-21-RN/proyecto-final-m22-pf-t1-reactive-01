import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const current = auth().currentUser;

export const savetype = (type, navigation) => {
  firestore().collection('users').doc(current.uid).update({type: type});
  if (type === 'client') {
    navigation.navigate('Menus');
  } else {
    navigation.navigate('HomeWalker');
  }
};
