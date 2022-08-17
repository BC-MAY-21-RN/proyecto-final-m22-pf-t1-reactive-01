import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const LabelMessage = ({title, text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.a}>
        <Text style={styles.title}>{title}:</Text>
      </View>
      <View style={styles.b}>
        <Text style={styles.texto}>{text}</Text>
      </View>
    </View>
  );
};

export default LabelMessage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {fontSize: 24, fontWeight: 'bold'},
  texto: {fontSize: 18, alignSelf: 'flex-end'},
  a: {
    flex: 1,
  },
  b: {flex: 1},
});
