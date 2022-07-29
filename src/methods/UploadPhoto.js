import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
const UploadPhoto = () => {
  const uid = auth().currentUser.uid;

  const addImageFirebase = async imagen => {
    await firestore()
      .collection('Photos')
      .add({
        imageUrl: imagen,
        uid: uid,
      })
      .catch();
  };

  const selectImageGalery = () => {
    const options = {
      title: 'select an image',
      storageOptions: {skipBackup: true, path: 'images'},
    };

    launchImageLibrary(options, response => {
      if (response.errorCode) {
        Alert.alert(response.errorMessage);
      } else if (response.didCancel) {
        Alert.alert('the user canceled');
      } else {
        const path = response.assets[0].uri;
        let file = path.split('/');
        let nameFile = file.pop();
        const task = storage()
          .ref('Photos/' + uid + '/' + nameFile)
          .putFile(path);

        task.on('state_changed', taskSnapshot => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
        });

        task.then(() => {
          addImageFirebase(nameFile);
          Alert.alert('Image uploaded to the bucket!');
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
        Alert.alert('the user canceled');
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
