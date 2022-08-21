import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const current = auth().currentUser;

export const savePet = async (
  name,
  typepet,
  breed,
  age,
  gender,
  color,
  description,
) => {
  await firestore
    .collection('users')
    .doc(current.uid)
    .add({
      pet: {
        namePet: name,
        typepet: typepet,
        breed: breed,
        age: age,
        gender: gender,
        color: color,
        description: description,
      },
    });
};
