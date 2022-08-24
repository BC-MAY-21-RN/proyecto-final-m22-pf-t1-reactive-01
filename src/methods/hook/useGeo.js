import {Linking} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const useGeo = () => {
  const toGoogleMaps = (latitude, longitude, navigation, id) => {
    var url = `google.navigation:q=${latitude}+${longitude}`;
    Linking.openURL(url);
    modify(id, navigation);
  };

  const modify = (id, navigation) => {
    try {
      firestore()
        .collection('payments')
        .doc(id)
        .update({completed: 'paid out'});
      navigation.navigate('HomeWalker');
    } catch (error) {
      console.log('error');
    }
  };

  return {toGoogleMaps};
};
