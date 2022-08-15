import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
const WalkerView = ({navigation}) => {
  const route = useRoute();
  const {hour, id, km} = route.params.data;

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
