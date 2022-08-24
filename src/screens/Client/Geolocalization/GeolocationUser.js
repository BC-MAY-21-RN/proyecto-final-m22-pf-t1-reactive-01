import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geo from '../../../methods/Geo';
import Layout from '../../../layout/Layout';
import ListScroll from '../../../components/ListScroll/ListScroll';
import {getListWalkers} from '../../../methods/RetrieveWalkerFS';
import Header from '../../../components/Header/Header';
import {store} from '../../../store/store';

const GeolocationUser = ({navigation}) => {
  const {lati, longi, getLocation} = Geo();
  const [walkers, setWalkers] = useState([]);
  const traerDatos = async () => {
    const datis = await getListWalkers();
    setWalkers(datis);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      getLocation();
      traerDatos();
    }, 20000);
    return () => clearInterval(interval);
  }, [getLocation]);

  // console.log(walkers);
  // <Marker coordinate={{latitude: lati, longitude: longi}} />
  return (
    <Layout>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.containerMap}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: store.getState().geoLocation.lat,
              longitude: store.getState().geoLocation.long,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}>
            {walkers.map((item, key) => (
              <View key={key}>
                <Marker
                  coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                  }}
                />
              </View>
            ))}
          </MapView>
        </View>
        <View style={styles.containerCard}>
          <Text style={styles.title}>Nearby Walkers</Text>
          <ListScroll data={walkers} />
        </View>
      </View>
    </Layout>
  );
};

export default GeolocationUser;

const styles = StyleSheet.create({
  container: {flex: 1},
  containerMap: {flex: 0.5},
  map: {
    width: '100%',
    height: '100%',
  },
  containerCard: {flex: 0.5},
  title: {fontSize: 25},
});
