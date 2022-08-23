import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import Layout from '../../layout/Layout';
import Header from '../../components/Header/Header';
import {useRoute} from '@react-navigation/native';

const LocalitationPet = ({navigation}) => {
  const lati = -37.972521;
  const longi = -57.5844;
  const route = useRoute();
  const {latitude, longitude} = route.params;
  return (
    <Layout>
      <Header navigation={navigation} />
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
          </MapView>
        </View>
      </View>
    </Layout>
  );
};

export default LocalitationPet;

const styles = StyleSheet.create({
  container: {flex: 1},
  containerMap: {margin: 10},
  map: {
    width: '100%',
    height: '100%',
  },
  containerCard: {flex: 0.5},
  title: {fontSize: 25},
});
