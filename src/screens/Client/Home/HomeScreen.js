import {View} from 'react-native';
import React, {useEffect} from 'react';
import Layout from '../../../layout/Layout';
import ButtonMenu from '../../../components/Button/ButtonMenu';
import {styles} from './styles';
import {store} from '../../../store/store';
import {setLatitud, setLongitud} from '../../../store/slices/pets/geoLocation';
import Geo from '../../../methods/Geo';
const HomeScreen = ({navigation}) => {
  const {lati, longi, getLocation} = Geo();

  useEffect(() => {
    const interval = setInterval(() => {
      getLocation();
      store.dispatch(setLatitud(lati));
      store.dispatch(setLongitud(longi));
    }, 100);
    return () => clearInterval(interval);
  }, [getLocation, longi, lati]);

  console.log(store.getState().geoLocation);

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.containerButtons}>
          <ButtonMenu
            title="My Pets"
            type="mypets"
            onPress={() => navigation.navigate('Mypet')}
          />
          <ButtonMenu
            title="Request Walker"
            type="find"
            onPress={() => navigation.navigate('Geolocation')}
          />
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
