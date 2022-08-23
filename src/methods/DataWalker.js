import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
export const getJobs = async () => {
  try {
    const uid = auth().currentUser.uid;
    const arrayJobs = [];
    const usersQuerySnapshot = await firestore().collection('payments').get();
    usersQuerySnapshot.forEach(documentSnapshot => {
      if (documentSnapshot.data().uidWalker === uid) {
        arrayJobs.push({id: documentSnapshot.id, ...documentSnapshot.data()});
      }
    });
    if (arrayJobs.length > 0) {
      return arrayJobs;
    } else {
      return arrayJobs;
    }
  } catch (error) {
    Alert.alert('data not found');
  }
};

export const getPerfil = async () => {
  try {
    const uid = auth().currentUser.uid;
    //const user = await firestore().collection('users').doc(uid).get();

    const arrayWalker = [];
    const usersQuerySnapshot = await firestore().collection('users').get();
    usersQuerySnapshot.forEach(documentSnapshot => {
      if (documentSnapshot.data().uid === uid) {
        arrayWalker.push({id: documentSnapshot.id, ...documentSnapshot.data()});
      }
    });
    return arrayWalker;
  } catch (error) {
    Alert.alert('data not found');
  }
};
