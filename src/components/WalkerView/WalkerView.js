import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WalkerView = ({data}) => {
  const {name, hour, distance} = data;
  return (
    <View>
      <Text>name</Text>
      <Text>hour</Text>
      <Text>distance</Text>
    </View>
  );
};

export default WalkerView;

const styles = StyleSheet.create({});
