import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
const current = auth().currentUser;

export const savePet = (
  name,
  typepet,
  breed,
  age,
  gender,
  color,
  description,
  navigation,
) => {
  firestore()
    .collection('mascotas')
    .add({
      owner: current.uid,
      namePet: name,
      typepet: typepet,
      breed: breed,
      age: age,
      gender: gender,
      color: color,
      description: description,
    })
    .then(() => {
      Alert.alert('add succesfully');
      navigation.navigate('UploadPets');
    })
    .catch(error => console.log(error));
};
