import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
const GeolocationTest = () => {
  const [origen, setOrigen] = useState({
    latitud: -37.970669,
    longitud: -57.588734,
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerMap}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: origen.latitud,
            longitude: origen.longitud,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}>
          <Marker
            coordinate={{latitude: origen.latitud, longitude: origen.longitud}}
          />

          <Marker coordinate={{latitude: -37.972521, longitude: -57.5844}} />

          <Marker coordinate={{latitude: -37.970237, longitude: -57.584121}} />
        </MapView>
      </View>
    </View>
  );
};

export default GeolocationTest;

const styles = StyleSheet.create({
  container: {flex: 1, margin: 10},
  containerMap: {flex: 0.4},
  map: {
    width: '100%',
    height: '100%',
  },
});
