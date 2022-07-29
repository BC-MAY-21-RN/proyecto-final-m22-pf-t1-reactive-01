import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const UploadPhoto = () => {
  const uid = auth().currentUser.uid;

  const addImageFirebase = async (urlImage, imagen) => {
    await firestore()
      .collection('Photos')
      .add({
        urlImage: urlImage,
        nameImage: imagen,
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
        console.log(response.errorMessage);
      } else if (response.didCancel) {
        console.log('the user canceled');
      } else {
        const path = response.assets[0].uri;
        let file = path.split('/');
        let nomFile = file.pop();
        const task = storage()
          .ref('Photos/' + uid + '/' + nomFile)
          .putFile(path);

        task.on('state_changed', taskSnapshot => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
        });

        task.then(() => {
          addImageFirebase(path, nomFile);
          console.log('Image uploaded to the bucket!');
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
        console.log(response.errorMessage);
      } else if (response.didCancel) {
        console.log('the user canceled');
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
