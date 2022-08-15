import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NearItem from '../NearItem/NearItem';

const ListScroll = ({data}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {data.map((item, key) => (
          <NearItem key={key} data={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ListScroll;

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {fontSize: 25},
});
