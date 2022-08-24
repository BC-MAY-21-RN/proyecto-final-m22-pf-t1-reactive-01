import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import Layout from '../../layout/Layout';
import Header from '../../components/Header/Header';
import {useRoute} from '@react-navigation/native';
import Button from '../../components/Button/CustomButton';
import {useGeo} from '../../methods/hook/useGeo';
const LocalitationPet = ({navigation}) => {
  const lati = -37.972521;
  const longi = -57.5844;
  const route = useRoute();
  const {latitude, longitude, date, id} = route.params;
  const {toGoogleMaps} = useGeo();
  const navegar = navigation;
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
            <Marker coordinate={{latitude: latitude, longitude: longitude}} />
          </MapView>
        </View>
        <View style={styles.containerButton}>
          <Button
            title="confirm and go"
            onPress={() => toGoogleMaps(latitude, longitude, navigation, id)}
          />
        </View>
      </View>
    </Layout>
  );
};

export default LocalitationPet;

const styles = StyleSheet.create({
  container: {flex: 1},
  containerMap: {
    flex: 0.8,
    marginTop: 10,
    borderWidth: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  containerButton: {
    flex: 0.2,

    justifyContent: 'center',
  },
});
