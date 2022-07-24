import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const login = (email, password, navigation) => {
  try {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        firestore()
          .collection('users')
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              if (doc.data().email === email) {
                doc.data().usertype === 'client'
                  ? navigation.navigate('ClientHome')
                  : navigation.navigate('WlakerHome');
              }
            });
          });
      });
  } catch (error) {
    alert(error.toString());
  }
};
