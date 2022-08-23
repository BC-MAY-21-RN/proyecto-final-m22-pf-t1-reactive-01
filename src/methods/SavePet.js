import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

const current = auth().currentUser;

export const savePet = (
  namePet,
  typepet,
  breed,
  age,
  gender,
  color,
  description,
  navigation,
) => {
  const perrito = 'dobv';
  firestore()
    .collection('mascotas')
    .add({
      uid: current.uid,
      namePet: namePet,
      typepet: typepet,
      breed: breed,
      age: age,
      gender: gender,
      color: color,
      description: description,
    })
    .then(() => {
      //Alert.alert('add succesfully');
      navigation.navigate('UploadPets', {namePet});
    })
    .catch(error => console.log(error));
};

export const getPets = async () => {
  const uid = auth().currentUser.uid;
  try {
    const petArray = [];
    const usersQuerySnapshot = await firestore().collection('mascotas').get();
    usersQuerySnapshot.forEach(documentSnapshot => {
      if (documentSnapshot.data().uid === uid) {
        petArray.push({
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        });
      }
    });

    return petArray;
  } catch (error) {
    Alert.alert('data not found');
  }
};

export const getImagePet = async () => {
  const uid = auth().currentUser.uid;
  try {
    const petImageArray = [];
    const usersQuerySnapshot = await firestore().collection('Photos').get();
    usersQuerySnapshot.forEach(documentSnapshot => {
      if (documentSnapshot.data().uid === uid) {
        petImageArray.push({
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        });
      }
    });
    //
    return petImageArray;
  } catch (error) {
    Alert.alert('data not found');
  }
};

export const retrivePets = async () => {
  const arrayPets = await getPets();
  const mascotas = [];
  if (arrayPets.length > 0) {
    const arrayImagePets = await getImagePet();
    if (arrayPets.length > 0) {
      arrayPets.forEach(pet => {
        arrayImagePets.forEach(photo => {
          if (pet.uid === photo.uid && pet.namePet === photo.namePet) {
            const dataPets = {
              url: photo.url,
              age: pet.age,
              description: pet.description,
              namePet: pet.namePet,
            };
            mascotas.push(dataPets);
          }
        });
      });
      return mascotas;
    }
  }
};
