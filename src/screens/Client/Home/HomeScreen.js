import {View} from 'react-native';
import React, {useEffect} from 'react';
import Layout from '../../../layout/Layout';
import ButtonMenu from '../../../components/Button/ButtonMenu';
import {styles} from './styles';
import {store} from '../../../store/store';
import {setLatitud, setLongitud} from '../../../store/slices/pets/geoLocation';
import Geo from '../../../methods/Geo';
import {signOut} from '../../../methods/Exit';
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

  // console.log(store.getState().geoLocation);

  return (
    <Layout>
      <View style={styles.containerButtons}>
        <View style={styles.buttons}>
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
          <ButtonMenu
            title="History Payment"
            type="history"
            onPress={() => navigation.navigate('HistoryPayment')}
          />
          <ButtonMenu
            title="Exit"
            type="exit"
            onPress={() => signOut(navigation)}
          />
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
