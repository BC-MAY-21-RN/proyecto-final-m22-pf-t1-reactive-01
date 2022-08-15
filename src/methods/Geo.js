import {Alert, PermissionsAndroid} from 'react-native';
import {useState} from 'react';
import Geolocation from 'react-native-geolocation-service';

export default function Geoloca() {
  const [lati, setlati] = useState(-37.972521);
  const [longi, setlongi] = useState(-57.5844);

  const hasLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      Alert.alert(err);
      return false;
    }
  };

  const getLocation = async () => {
    const hasLocationPermissione = await hasLocationPermission();
    if (!hasLocationPermissione) return;
    Geolocation.getCurrentPosition(
      position => {
        setlati(position.coords.latitude);
        setlongi(position.coords.longitude);
      },
      error => {
        Alert.alert(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 50,
        forceRequestLocation: true,
      },
    );
  };

  return {lati, longi, getLocation};
}
