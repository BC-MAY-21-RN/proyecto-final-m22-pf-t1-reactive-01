import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

const UploadPhoto = () => {
  const uid = auth().currentUser.uid;
  const addImageFirebase = async (imagen, urlImage, namePet) => {
    await firestore()
      .collection('Photos')
      .add({
        url: urlImage,
        name: imagen,
        uid: uid,
        namePet: namePet,
      })
      .catch();
  };

  const selectImageGalery = namePet => {
    const options = {
      title: 'select an image',
      storageOptions: {skipBackup: true, path: 'images'},
    };

    launchImageLibrary(options, async response => {
      if (response.errorCode) {
        Alert.alert(response.errorMessage);
      } else if (response.didCancel) {
        Alert.alert('The operation was canceled');
      } else {
        const path = response.assets[0].uri;
        let file = path.split('/');
        let nameFile = file.pop();
        const task = storage().ref('Photos/' + uid + '/' + nameFile);
        await task.putFile(path);
        await task.getDownloadURL().then(urlFirebase => {
          addImageFirebase(nameFile, urlFirebase, namePet);
          Alert.alert('Image uploaded successfully');
        });
      }
    });
  };
  const takePicture = () => {
    const options = {
      title: 'take a picture',
      storageOptions: {skipBackup: true, path: 'images'},
      includeBase64: true,
    };

    launchCamera(options, response => {
      if (response.errorCode) {
        Alert.alert(response.errorMessage);
      } else if (response.didCancel) {
        Alert.alert('The operation was canceled');
      } else {
        const path = response.assets[0].uri;
      }
    });
  };

  return {
    selectImageGalery,
  };
};

export default UploadPhoto;
