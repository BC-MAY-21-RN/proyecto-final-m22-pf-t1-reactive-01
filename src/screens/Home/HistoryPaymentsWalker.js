import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../../layout/Layout';
import CardPayment from '../../components/CardHistory/CardPayment';
import Header from '../../components/Header/Header';
import CardHistoryWalker from '../../components/CardHistory/CardHistoryWalker';
const data = [
  {
    date: 'lunes',
    walker: 'nico',
    hours: '2',
    price: '11',
  },
  {
    date: 'lunes',
    walker: 'pepe',
    hours: '2',
    price: '11',
  },
  {
    date: 'lunes',
    walker: 'favi',
    hours: '2',
    price: '11',
  },
  {
    date: 'lunes',
    walker: 'raquel',
    hours: '2',
    price: '11',
  },
];
const HistoryPaymentsWalkers = ({navigation}) => {
  return (
    <Layout>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>History Walker</Text>
        </View>
        <ScrollView style={styles.scroll}>
          {data.map((item, key) => (
            <CardHistoryWalker key={key} data={item} />
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default HistoryPaymentsWalkers;

const styles = StyleSheet.create({
  container: {flex: 1},
  containerTitle: {alignItems: 'center', marginBottom: 10, marginTop: 10},
  title: {fontSize: 30, fontWeight: 'bold', color: 'black'},
});
