import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
const WalkerView = ({navigation}) => {
  //const {id, hour, distance} = data;

  const route = useRoute();
  const {hour, id, km} = route.params.data;
  console.log(route);
  return (
    <View>
      <Text>{id}</Text>
      <Text>{hour}</Text>
      <Text>{km}</Text>
    </View>
  );
};

export default WalkerView;

const styles = StyleSheet.create({});
