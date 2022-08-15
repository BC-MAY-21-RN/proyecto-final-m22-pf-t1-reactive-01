import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NearItem from '../NearItem/NearItem';

const Item = ({id, hour, km}) => (
  <View style={styles.item}>
    <NearItem name={id} hour={hour} distance={km} />
  </View>
);

const ListScroll = ({title, data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}> {title}</Text>
      </View>
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
