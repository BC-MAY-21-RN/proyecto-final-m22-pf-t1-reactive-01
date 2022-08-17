import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geo from '../../../methods/Geo';
import Layout from '../../../layout/Layout';
import ListScroll from '../../../components/ListScroll/ListScroll';
import useWalkers from '../../../methods/RetrieveWalker';
const data = [
  {
    id: 'francisco ',
    hour: '2',
    km: '2',
  },
  {
    id: 'ayeza',
    hour: '2',
    km: '2',
  },
  {
    id: 'martin',
    hour: '2',
    km: '2',
  },
];

const GeolocationUser = () => {
  const {lati, longi, getLocation} = Geo();
  const {walkers} = useWalkers();

  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(walkers);

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.containerMap}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: lati,
              longitude: longi,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}>
            <Marker coordinate={{latitude: lati, longitude: longi}} />
            <Marker coordinate={{latitude: -37.972521, longitude: -57.5844}} />
            <Marker
              coordinate={{latitude: -37.970237, longitude: -57.584121}}
            />
            <Marker
              coordinate={{latitude: -37.9567287, longitude: -57.625607}}
            />
          </MapView>
        </View>
        <View style={styles.containerCard}>
          <Text style={styles.title}>Nearby Walkers</Text>
          <ListScroll data={data} />
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
