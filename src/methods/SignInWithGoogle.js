import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {API_URL} from '@env';

GoogleSignin.configure({
  webClientId: API_URL,
});

export const googleSignIn = async navigation => {
  try {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_sign_in = await auth().signInWithCredential(googleCredential);

    const userData = {
      email: user_sign_in.additionalUserInfo.profile.email,
      fullName: user_sign_in.additionalUserInfo.profile.given_name,
    };
    if (user_sign_in.additionalUserInfo.isNewUser) {
      const current = auth().currentUser;
      addUserInfo(userData.fullName, userData.email, current.uid);
    } else {
      navigation.navigate('Menus');
    }
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      Alert.alert('Error', 'Login cancelled');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      Alert.alert('operation (sign in) is in progress already: ');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      Alert.alert('play services not available or outdated: ');
    } else {
      Alert.alert('Error', error.toString());
    }
  }
};
export const addUserInfo = (firstname, email, uid, navigation) => {
  firestore()
    .collection('users')
    .add({
      firstname: firstname,
      email: email,
      uid: uid,
    })
    .then(() => {
      Alert.alert('User added succesfully');
      navigation.navigate('Menus');
    })
    .catch(error => console.log(error));
};
