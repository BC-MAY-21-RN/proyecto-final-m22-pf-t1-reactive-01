import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
export const signOut = navigation => {
  auth()
    .signOut()
    .then(() => navigation.navigate('Login'))
    .catch(error => {
      Alert.alert('Ocurrió un error, intentalo más tarde.', error);
    });
};
