import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
const GeolocationTest = () => {
  return (
    <View style={styles.container}>
      <Text>GeolocalizacionTest </Text>
    </View>
  );
};

export default GeolocationTest;

const styles = StyleSheet.create({
  container: {flex: 1},
  map: {
    width: '100%',
    height: '100%',
  },
});
