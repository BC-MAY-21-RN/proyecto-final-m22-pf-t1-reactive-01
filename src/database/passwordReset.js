import {auth} from '@react-native-firebase/auth';

export const resetPassword = async (navigation, email) => {
  alert('Sending password reset');
  try {
    await auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        navigation.navigate('Login');
      });
  } catch (error) {
    alert(error.toString());
  }
};
