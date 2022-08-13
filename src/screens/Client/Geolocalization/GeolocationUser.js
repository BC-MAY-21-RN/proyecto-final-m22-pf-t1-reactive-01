import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import NearItem from '../../../components/NearItem/NearItem';
import {ScrollView} from 'react-native-gesture-handler';
import Geo from '../../../methods/Geo';
import Layout from '../../../layout/Layout';
const GeolocationUser = () => {
  const {lati, longi, getLocation} = Geo();

  useEffect(() => {
    getLocation();
  }, [getLocation]);

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
          <ScrollView>
            <NearItem name="Francisco Jose " hour="16:30" distance="1.3 KM" />
            <NearItem name="Francisco Jose " hour="16:30" distance="1.3 KM" />
            <NearItem name="Francisco Jose " hour="16:30" distance="1.3 KM" />
            <NearItem name="Francisco Jose " hour="16:30" distance="1.3 KM" />
            <NearItem name="Francisco Jose " hour="16:30" distance="1.3 KM" />
            <NearItem name="Francisco Jose " hour="16:30" distance="1.3 KM" />
            <NearItem name="Francisco Jose " hour="16:30" distance="1.3 KM" />
            <NearItem name="Francisco Jose " hour="16:30" distance="1.3 KM" />
          </ScrollView>
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
